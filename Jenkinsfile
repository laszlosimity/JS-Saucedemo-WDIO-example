pipeline {
  agent any
  
  stages {
    
    stage('Checkout') {
      checkout scm
    }

    stage('Test') {
      sauce('saucelabs') {
              sh 'npm install'
              sh 'npm run test'             
      }
    }

    stage('Collect Results') {
      step([$class: 'SauceOnDemandTestPublisher'])
    }
  }
}
