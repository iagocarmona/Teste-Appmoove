echo "Copiando arquivo .csv para o container do docker..."

docker cp users.csv teste_db:/users.csv

echo "Realizando a cópia dos dados do arquivo .csv para o banco de dados 'teste'..." 
echo "Agora, basta aguardar pela finalização da importação..."

docker exec -it teste_db /bin/bash -c "psql -U postgres -d teste -c '\copy users FROM 'users.csv' csv header;'"
