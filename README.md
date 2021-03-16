# DesafioFeegow

Como rodar a aplicação:

-Passo 1: Depois de clonar o repositório precisamos dar o comando "composer install" na pasta 'backend' e o comando "npm install" na past 'frontend'.

-Passo 2: Agora iremos configurar o arquivo '.env' mas antes iremos rodar o comando "cp .env.example .env" na pasta 'backend'. Após isso iremos no arquivo '.env.example'e no campo 'DB_DATABASE' vamos colocar 'DB_DATABASE=feegow', já no PHPMyAdmin iremos criar o banco de dados com o mesmo nome 'feegow'.

-Passo 3: Com os dois passos acima satisfeitos podemos rodar os seguintes comandos na pasta "backend", na ordem abaixo:

-> php artisan migrate:fresh
-> php artisan serve
Nota: A partir daqui o back já estará sendo servido.

-Passo 4: Para rodar o front é só dar, na pasta "frontend", o seguintes comandos:

-> ng serve
