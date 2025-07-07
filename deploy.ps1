# Angular Firebase Deployment Script
# This script automates the deployment process for the Angular application to Firebase

param(
    [switch]$SkipBuild,
    [switch]$SkipLogin,
    [switch]$Force
)

Write-Host "Angular Firebase Deployment Script" -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan

# Function to check if command exists
function Test-Command($cmdname) {
    return [bool](Get-Command -Name $cmdname -ErrorAction SilentlyContinue)
}

# Function to check Firebase project
function Test-FirebaseProject {
    if (Test-Path "firebase.json") {
        Write-Host "Firebase project already initialized" -ForegroundColor Green
        return $true
    } else {
        Write-Host "Firebase project not initialized" -ForegroundColor Red
        return $false
    }
}

# Function to build the application
function Build-Application {
    Write-Host "Building Angular application..." -ForegroundColor Yellow
    
    if ($SkipBuild) {
        Write-Host "Skipping build as requested" -ForegroundColor Yellow
        return
    }
    
    try {
        npm run build-prod
        if ($LASTEXITCODE -eq 0) {
            Write-Host "Build completed successfully" -ForegroundColor Green
        } else {
            Write-Host "Build failed" -ForegroundColor Red
            exit 1
        }
    } catch {
        Write-Host "Build error: $_" -ForegroundColor Red
        exit 1
    }
}

# Function to handle Firebase login
function Invoke-FirebaseLogin {
    if ($SkipLogin) {
        Write-Host "Skipping Firebase login as requested" -ForegroundColor Yellow
        return
    }
    
    Write-Host "Checking Firebase authentication..." -ForegroundColor Yellow
    
    try {
        $firebaseUser = firebase login:list 2>$null
        if ($firebaseUser -and $firebaseUser -notlike "*No authorized accounts*") {
            Write-Host "Already logged in to Firebase" -ForegroundColor Green
            return
        }
    } catch {
        # Continue to login process
    }
    
    Write-Host "Please login to Firebase..." -ForegroundColor Yellow
    Write-Host "This will open your browser for authentication" -ForegroundColor Yellow
    
    try {
        firebase login
        if ($LASTEXITCODE -eq 0) {
            Write-Host "Firebase login successful" -ForegroundColor Green
        } else {
            Write-Host "Firebase login failed" -ForegroundColor Red
            exit 1
        }
    } catch {
        Write-Host "Firebase login error: $_" -ForegroundColor Red
        exit 1
    }
}

# Function to initialize Firebase project
function Initialize-FirebaseProject {
    if (Test-FirebaseProject) {
        if (-not $Force) {
            $response = Read-Host "Firebase project already exists. Reinitialize? (y/N)"
            if ($response -ne "y" -and $response -ne "Y") {
                Write-Host "Skipping Firebase initialization" -ForegroundColor Yellow
                return
            }
        }
    }
    
    Write-Host "Initializing Firebase project..." -ForegroundColor Yellow
    Write-Host "Please select the following options when prompted:" -ForegroundColor Yellow
    Write-Host "  - Configure and deploy Firebase Hosting sites" -ForegroundColor Yellow
    Write-Host "  - Public directory: dist/docker-jenkins-angular" -ForegroundColor Yellow
    Write-Host "  - Single-page app: No" -ForegroundColor Yellow
    
    try {
        firebase init hosting
        if ($LASTEXITCODE -eq 0) {
            Write-Host "Firebase project initialized successfully" -ForegroundColor Green
        } else {
            Write-Host "Firebase initialization failed" -ForegroundColor Red
            exit 1
        }
    } catch {
        Write-Host "Firebase initialization error: $_" -ForegroundColor Red
        exit 1
    }
}

# Function to deploy to Firebase
function Deploy-Firebase {
    Write-Host "Deploying to Firebase..." -ForegroundColor Yellow
    
    try {
        firebase deploy --only hosting
        if ($LASTEXITCODE -eq 0) {
            Write-Host "Deployment completed successfully!" -ForegroundColor Green
            Write-Host "Your site is live at: https://qa-automation-test-site.web.app/" -ForegroundColor Cyan
        } else {
            Write-Host "Deployment failed" -ForegroundColor Red
            exit 1
        }
    } catch {
        Write-Host "Deployment error: $_" -ForegroundColor Red
        exit 1
    }
}

# Main execution
try {
    # Check prerequisites
    Write-Host "Checking prerequisites..." -ForegroundColor Yellow
    
    if (-not (Test-Command "node")) {
        Write-Host "Node.js is not installed or not in PATH" -ForegroundColor Red
        exit 1
    }
    
    if (-not (Test-Command "npm")) {
        Write-Host "npm is not installed or not in PATH" -ForegroundColor Red
        exit 1
    }
    
    if (-not (Test-Command "firebase")) {
        Write-Host "Firebase CLI is not installed" -ForegroundColor Red
        Write-Host "Please install it with: npm install -g firebase-tools" -ForegroundColor Yellow
        exit 1
    }
    
    Write-Host "All prerequisites met" -ForegroundColor Green
    
    # Check if we're in the correct directory
    if (-not (Test-Path "package.json")) {
        Write-Host "package.json not found. Please run this script from the project root directory" -ForegroundColor Red
        exit 1
    }
    
    # Install dependencies if node_modules doesn't exist
    if (-not (Test-Path "node_modules")) {
        Write-Host "Installing dependencies..." -ForegroundColor Yellow
        npm install
        if ($LASTEXITCODE -ne 0) {
            Write-Host "Failed to install dependencies" -ForegroundColor Red
            exit 1
        }
    }
    
    # Execute deployment steps
    Build-Application
    Invoke-FirebaseLogin
    Initialize-FirebaseProject
    Deploy-Firebase
    
    Write-Host "Deployment process completed successfully!" -ForegroundColor Green
    
} catch {
    Write-Host "Deployment failed with error: $_" -ForegroundColor Red
    exit 1
} 