# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Partendo dall’esercizio precedente terminiamo il sistema di autenticazione utilizzando le API che abbiamo sviluppato durante il modulo express :occhiali_da_sole:
Ecco le principali funzionalità che ci aspettiamo:
L’utente, tramite un form in una pagina, deve poter effettuare il login all’area amministrativa
in caso di errore, mostriamo il messaggio di errore ricevuto dal backend
in caso di successo, reindirizziamo l’utente alla dashboard
L’utente autenticato deve poter aggiungere, modificare o cancellare gli articoli del blog
L’utente autenticato deve poter effettuare il logout.
N.B come al solito, lo stile non è importante!
BONUS:
Gestire la pagina 404, anche per la pagina del singolo articolo 
Distinguere tra le pagine che possono accedere tutti gli utenti e quelle che possono accedere solo gli utenti di tipo "admin"