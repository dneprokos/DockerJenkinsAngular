pipeline {
  agent any
  triggers { 
    pollSCM('* * * * *') 
  }
  stages {
    stage('###Clean up repository###') {
      steps {
        echo '###Getting repository sources!###'
        deleteDir() /* clean up our workspace */
      }
    }
    stage('###Build/Deploy###') {
      steps {
        echo 'Start deployment!'
      }
    }
    stage('###Run e2e tests###') {
      steps {
        echo 'Starting to run e2e tests!'
      }
    }
  }
}