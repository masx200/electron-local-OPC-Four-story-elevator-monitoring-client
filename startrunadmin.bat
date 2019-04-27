@echo off  
 rem  pushd "%CD%"  
rem    CD /D "%~dp0"  
rem set "electron=electron.exe"
rem if  not exist "%cd%\node_modules\electron\dist\electron.exe" ( if not EXIST %electron% (goto :NO_electron) )

rem :: BatchGotAdmin  
rem :-------------------------------------  
REM  --> Check for permissions  

>nul 2>&1 "%SYSTEMROOT%\system32\cacls.exe" "%SYSTEMROOT%\system32\config\system"  
  
REM --> If error flag set, we do not have admin.  
if '%errorlevel%' NEQ '0' (  
    echo Requesting administrative privileges...  
	rem echo 以管理员身份运行...  
    goto UACPrompt  
) else ( goto gotAdmin )  
  
:UACPrompt  
    echo Set UAC = CreateObject^("Shell.Application"^) > "%temp%\getadmin.vbs"  
    echo UAC.ShellExecute "%~s0", "", "", "runas", 0 >> "%temp%\getadmin.vbs"  
rem echo UAC.ShellExecute "%~s0", "", "", "runas", 1 >> "%temp%\getadmin.vbs"  
    "%temp%\getadmin.vbs"  
    exit /B  
  :NO_electron
  echo donot exist electron.exe please run "npm install" to install electron first
  pause
  exit /B  
:gotAdmin  
    if exist "%temp%\getadmin.vbs" ( del "%temp%\getadmin.vbs" )  
    pushd "%CD%"  
    CD /D "%~dp0"  
	set "electron=electron.exe"
	
	
rem	%cd%\node_modules\electron\dist\electron.exe %cd%
		
		%electron% %cd%


