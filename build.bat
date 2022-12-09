title Practica 5 Launcher

@echo off
cls

goto launch

:launch
    cls
    echo.
    echo.
    echo Estas son las configuraciones para lanzar la aplicacion
    echo.
    echo.
    echo 1.- Developer mode
    echo 2.- Release mode
    echo 3.- Salir
    echo.
    echo.

    set /p command=

    IF %command%==1 goto developer
    IF %command%==2 goto release
    IF %command%==3 goto exit_
    goto launch

:developer
    cls
    echo.
    echo.
    echo Lanzando la aplicacion en modo developer
    echo.
    echo.
    start /MIN /D .\Practica5_ServiceWeb\practica5-api\ npm run start:dev
    start /MIN /D .\Practica5_Client\ npm start
    goto exit_

:release
    cls
    echo.
    echo.
    echo Lanzando la aplicacion en modo release
    echo.
    echo.
    start /MIN /D .\Practica5_ServiceWeb\practica5-api\ npm start
    start /MIN /D .\Practica5_Client\ npm start
    goto exit_

:exit_
    cls
    echo.
    echo.
    echo Execution completed!
    echo.
    pause 
    cls
    exit