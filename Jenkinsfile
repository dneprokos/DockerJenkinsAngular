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
                sh 'docker system prune -af'
            }
        }
        stage('Build/Deploy') {
            options {
                timeout(time: 15, unit: 'MINUTES')
            }
            steps {
                echo 'Start deployment'
                sh 'dir'
                sh 'docker-compose up -d'
                sh 'docker exec testapp ./hubHealthCheck.sh'
            }
        }
        stage('Run e2e tests') {
            steps {
                echo "Starting to run e2e tests"
                sh 'docker exec testapp protractor ./e2e/protractor-ci.conf.js'
            }
        }
        stage('Artifacts') {
            steps {
                echo "Storing artifacts"
            }
        }
    }
    post {
        cleanup {
            sh 'docker-compose down'
            sh 'docker system prune -af'
            deleteDir()
        }
    }
}