pipeline {
    agent any

    tools {
        // Specify the NodeJS installation defined in Jenkins Global Tool Configuration
        nodejs 'Base'
    }


    environment {
        GITHUB_TOKEN = credentials('GITHUB_PACKAGE_TOKEN')
    }

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Publish to GitHub Packages') {
            steps {
                script {
                    sh 'echo @airconsole:registry=https://npm.pkg.github.com/ > .npmrc'
                    sh 'echo "//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}" >> .npmrc'
                    sh 'npm publish --no-git-checks'
                }
            }
        }
    }

    post {
        always {
            echo 'Build completed'
            deleteDir()
        }
    }
}
