pipeline {
  agent any
  
  stages {
    
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Test') {
      steps {       
        sauce('saucelabs') {
                sh 'npm install'
                sh 'npm run test'             
        }
      }
    }

    stage('Collect Results') {
      steps {
        //step([$class: 'SauceOnDemandTestPublisher'])
      }
    }
  }
}
