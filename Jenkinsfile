pipeline {
  agent any
  
  stages {
    
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage ('Parallel Tests') {
      parallel {

        stage('Unit Tests Cypress') {
          steps {
            dir('./cypress') {
              nodejs('12.6') {
                checkout([$class: 'GitSCM', branches: [[name: '*/master']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/saucelabs-training/demo-js']]])
                sh 'cd testrunner-toolkit/cypress'
                echo $PWD
                sh 'npm install'
                sh 'npx saucectl run --test-env sauce'                                      
              }
             }
          }
        }

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
