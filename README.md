
### 🌟 (OPCIÓN 1) INSTALACIÓN AUTOMÁTICA 🫰
[![blog](https://img.shields.io/badge/Instalacion-Automatica-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://youtu.be/ZA7ZKB8Mo9k?si=u6puIzNEQGvJTBZG)
> **Note** Comandos para instalar de forma automática en Termux  
```bash
termux-setup-storage
```
```bash
apt update -y && yes | apt upgrade && pkg install -y bash wget mpv && wget -O - https://raw.githubusercontent.com/BOTGATITO/Nani/master/install.sh | bash
```
```js
// PERSONALIZAR INSTALACIÓN AUTOMÁTICA (En caso de una Bifurcación)
// Parámetros editables

// REFERENCIA
"wget -O - https://raw.githubusercontent.com/BOTGATITO/Nani/master/install.sh | bash"

// PARÁMETROS QUE PUEDE SER MODIFICADOS --> "[...]"
"wget -O - https://raw.githubusercontent.com/[usuario]/[repositorio]/[rama]/install.sh | bash"
```
#### MODIFICAR ARCHIVO [`install.sh`](https://github.com/GataNina-Li/GataBot-MD/blob/master/gata.sh)
```js
//LÍNEAS A MODIFICAR
205 --> "git clone https://github.com/[user]/[repositorio].git"

209 --> "cd [repositorio]"

//Una vez hecho estos cambios ejecute los nuevos comandos en Termux
```

----
### 🌎 ELITE BOT TERMUX 24/7
> Debe ya estar vinculado con el código QR, despues poner en la consola del termux (CONTROL + Z) enter y despues escribir (cd REPOSITORIO) ⬅️, después enter y poner el siguiente comando ⬇️
```bash
termux-wake-lock && npm i -g pm2 && pm2 start index.js && pm2 save && pm2 logs 
``` 
#### ⬇️ Opciones Disponibles
> **Warning** Esto eliminará todo el historial que hayas establecido con PM2:
```bash 
pm2 delete index
``` 
> Si tienes cerrado Termux y quiere ver de nuevo la ejecución use:
```bash 
pm2 logs 
``` 
> Si desea detener la ejecución de Termux use:
```bash 
pm2 stop index
``` 
> Si desea iniciar de nuevo la ejecución de Termux use:
```bash 
pm2 start index
``` 
----
