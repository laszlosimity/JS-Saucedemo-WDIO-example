pipeline {
  agent any
  
  stages {
    
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage ('Tests') {
      parallel {
        stage('E2E Desktop Tests') {
          steps {       
            sauce('laszlosimity') {
              nodejs('12.6') {
                sh 'npm install'
                sh 'npm run test'             
              }
            }
          }
        }

        stage('E2E Real Mobile Tests') {
          steps {       
            sauce('laszlosimity') {
              nodejs('12.6') {
                sh 'npm install'
                sh 'npm run mobile'             
              }
            }
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
