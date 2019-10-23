pipeline {
    agent any
    triggers {
        pollSCM('* * * * *')
    }
    options {
        disableConcurrentBuilds() 
        skipStagesAfterUnstable()
        timeout(time: 30, unit: 'MINUTES')
        timestamps()  
    }
    stages {
        stage('Pre-cleanup') {
            steps {
                echo "Remove docker containers"
                sh 'docker-compose down'
                sh 'docker system prune -af'
            }
        }
        stage('Build/Deploy') {
            options {
                timeout(time: 15, unit: 'MINUTES')
            }
            steps {
                echo 'Start deployment'
                sh 'docker-compose up -d'
                sh 'docker container exec -t testapp sh hubHealthCheck.sh'
                echo 'Test environment is ready'
            }
        }
        stage('Run e2e tests') {
            steps {
                echo "Starting to run e2e tests"
                sh 'docker container exec -t testapp protractor ./e2e/protractor-ci.conf.js'       
            }
        }
    }
    post {
        always {
            sh 'docker cp testapp:/app/e2e/results .'
            archiveArtifacts artifacts: '/e2e/results/test-results.json'
        }
    }
}