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
        sauce('laszlosimity') {
          nodejs('12.6') {
                sh 'npm install'
                sh 'npm run test'             
          }
        }
      }
    }

    stage('Collect Results') {
      steps {
        //step([$class: 'SauceOnDemandTestPublisher'])        
        saucePublisher()
      }
    }
  }
}
