# Installation
```shell 
npm install
```

# Créer un environnement
Créer un fichier .env à la racine de votre projet avec les propriétés suivantes :
```shell 
PORT=
PRIVATE_KEY=""
RPC_URL=""
```

Le JSON-RPC doit utiliser WebSocket pour établir une connexion persistante entre le client et le serveur pour  permettre aux clients d'envoyer et de recevoir des requêtes à tout moment et d'obtenir une réponse immédiate. Vous pouvez en obtenir un sur [Alchemy](https://www.alchemy.com/). 

# Lancement des tests

```shell 
npx hardhat test
```

# Lancement de l'oracle

```shell
node server.js
`````

# Adresse du smart contract
Mumbai : [0x456c55b09D21D489efa145fd411FE292ED06029f](https://mumbai.polygonscan.com/address/0x456c55b09D21D489efa145fd411FE292ED06029f#code).

