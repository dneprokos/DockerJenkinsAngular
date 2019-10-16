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
                sh 'docker image ls -a'
            }
        }
        stage('Build/Deploy') {
            options {
                timeout(time: 15, unit: 'MINUTES')
            }
            steps {
                echo 'Start deployment'
                sh 'docker-compose up -d'
            }
        }
        stage('Run e2e tests') {
            steps {
                echo "Starting to run e2e tests"
                sh 'docker image ls -a'
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