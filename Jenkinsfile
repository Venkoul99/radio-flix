pipeline {
    agent any 

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Venkoul99/radio-flix'
            }
        }

        stage('Build') {
            steps {
                echo "Building the project..."
                sh 'npm install'
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            when {
                branch 'master'
            }
            steps {
                echo "Deploying to production..."
                sh """
                ssh user@your-server 'cd /path/to/your/app && git pull origin master && npm install && pm2 restart all'
                """
            }
        }
    }

    post {
        success {
            echo 'Deployment was successful!'
        }
        failure {
            echo 'Deployment failed!'
        }
    }
}
