Die Lockbox API ermöglicht es Informationen zu Kunden und Sendungen direkt und einfach von [Lockbox](http://www.lockboxsystem.com) abzufragen.

## Authentifizierung

Zu jeder Anfrage an unsere API muss der API-Key aus dem ServiceProvider-Konto als `GET`-Parameter mit gesendet werden. Bitte halte diesen API-Key stets geheim und vertraulich.

Beispiel

    https://api.lockboxsystem.com/v1/customer/anchor/a123?apikey=abcdef....

## Testen

Zum Testen einer Funktion kannst du diese an eine alternative Basisadresse absenden. Nutze dafür die Adresse `http://api.lckbx.de/v1` zusammen mit dem normalen API-Key. Alle Anfragen an dieses System werden regulär verarbeitet aber erstellte Sendungen ggf. nach einer unbestimmten Zeit wieder verworfen.

## Versionierung

Neuerungen an der API sind nicht ausgeschlossen. Dabei wird stets darauf geachtet, dass vorherige Versionen weiterhin ohne Beeinträchtigung funktionieren. Diese Dokumentation ist auf GitHub (https://github.com/lockboxsystem/apidoc) verfügbar und kann für Benachrichtigungen über Veränderungen dort beobachtet werden.