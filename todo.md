1. instalar node y npm.  https://nodejs.org/en/download
2. node js instala algo the ptyhon y algo llamado chocolate 
3. verificar las versiones de estos 
4. Instalar pyenv-win (Gestor de versiones de Python):
   - PowerShell (Admin): `choco install pyenv-win`
   - Cerrar y reabrir terminal.
5. Instalar una versión estable de Python:
   - `pyenv install 3.11.7`
   - `pyenv global 3.11.7`
6. Configurar el proyecto (Aislamiento):
   - Ir a la carpeta del proyecto.
   - Crear entorno virtual: `python -m venv venv`
   - Activar entorno: `.\venv\Scripts\activate`

   pip install -r requirements.txt

7. (Opcional) Instalar pipx para herramientas globales (como superclaude):
   - `python -m pip install --user pipx`


====================================
npm install
En React: Se usa el archivo package.json para las dependencias.