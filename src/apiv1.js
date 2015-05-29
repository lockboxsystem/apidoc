/**
 * @apiDefineErrorStructure AccessError
 *
 * @apiError apikey Missing or wrong API Key.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad request
 *     {
 *        "errors":[
 *           {
 *               "title" : "Missing API-Key",
 *               "status": "400",
 *           }
 *       ]
 *     }
 */

/**
 * @apiDefineErrorStructure FunctionError
 *
 * @apiError function The requested function does not exists.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad request
 *     {
 *       "errors":[
 *           {
 *               "title" : "Missing function",
 *               "status": "400",
 *           }
 *       ]
 *     }
 */

/**
 * @apiDefinePermission apikey Lesezugriff auf Sendungen
 * Zur Abfrage muss der GET-Parameter ?apikey=[DEIN_API_KEY] immer mit gesendet werden.
 */

/**
 * @api {get} /customer/anchor/:anchor_nr Ankernummer abfragen
 * @apiName GetCustomerByAnchor
 * @apiGroup Customer
 * @apiVersion 1.0.0
 * @apiPermission apikey
 * @apiDescription Gibt Informationen zu einem bei Lockbox registrierten Kunden aus.
 *
 * @apiParam {string} anchor_nr Ankernummer des Kunden. In der Form a123, A123 oder A00123.
 *
 * @apiSuccess {Object[]} Customer
 * @apiSuccess {String} Customer.customer_nr Kundennummer
 * @apiSuccess {String} Customer.anchor_nr Ankernummer
 * @apiSuccess {Number} Customer.foa Anrede, "female" für Frau, "male" für Herr oder leer
 * @apiSuccess {String} Customer.salutation Titel
 * @apiSuccess {String} Customer.first_name Vorname
 * @apiSuccess {String} Customer.last_name Nachname
 * @apiSuccess {String} Customer.company Firma
 * @apiSuccess {String} Customer.street Straße
 * @apiSuccess {String} Customer.streetnumber Hausnummer 
 * @apiSuccess {String} Customer.additional_info Adresszusatz, Etage, Eingang
 * @apiSuccess {Number} Customer.zip_code Postleitzahl
 * @apiSuccess {String} Customer.city Stadt
 * @apiSuccess {String} Customer.country Land, ISO 3166-1 alpha-2 code
 * @apiSuccess {String} Customer.phone Mobilnummer
 * @apiSuccess {String} Customer.email E-Mail-Adresse
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *           Customer: {
 *              customer_nr: "12345678"
 *              anchor_nr: "A00123"
 *              foa: "male"
 *              salutation: "Dr."
 *              first_name: "Max"
 *              last_name: "Mustermann"
 *              company: ""
 *              street: "Musterstr."
 *              streetnumber: "66"
 *              additional_info: null
 *              zip_code: "10117"
 *              city: "Berlin"
 *              country: "DE"
 *              phone: "012345678"
 *              email: "max@mustermann.de"
 *          }
 *      }
 *
 * @apiErrorTitle (CustomerNotFound) Es konnte kein Kunde gefunden werden.
 * @apiErrorStructure AccessError
 * @apiErrorStructure FunctionError
 * @apiError (Error 400) anchor_nr Missing anchor number.
 * @apiError (Error 404) anchor_nr Anchor number not found or Customer not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not found
 *     {
 *       "errors":[
 *           {
 *               "title" : "No Customer found",
 *               "status": "404",
 *           }
 *       ]
 *     }
 */

/**
 * @api {get} /customer/item/:customer_nr Kunden abfragen
 * @apiName GetCustomer
 * @apiGroup Customer
 * @apiVersion 1.0.2
 * @apiPermission apikey
 * @apiDescription Gibt Informationen zu einem bei Lockbox registrierten Kunden aus.
 *
 * @apiParam {Number} customer_nr Kundennummer des Kunden.
 *
 * @apiSuccess {Object[]} Customer
 * @apiSuccess {String} Customer.customer_nr Kundennummer
 * @apiSuccess {String} Customer.anchor_nr Ankernummer
 * @apiSuccess {Number} Customer.foa Anrede, "female" für Frau, "male" für Herr oder leer
 * @apiSuccess {String} Customer.salutation Titel
 * @apiSuccess {String} Customer.first_name Vorname
 * @apiSuccess {String} Customer.last_name Nachname
 * @apiSuccess {String} Customer.company Firma
 * @apiSuccess {String} Customer.street Straße
 * @apiSuccess {String} Customer.streetnumber Hausnummer 
 * @apiSuccess {String} Customer.additional_info Adresszusatz, Etage, Eingang
 * @apiSuccess {Number} Customer.zip_code Postleitzahl
 * @apiSuccess {String} Customer.city Stadt
 * @apiSuccess {String} Customer.country Land, ISO 3166-1 alpha-2 code
 * @apiSuccess {String} Customer.phone Mobilnummer
 * @apiSuccess {String} Customer.email E-Mail-Adresse
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *           Customer: {
 *              customer_nr: "12345678"
 *              anchor_nr: "A00123"
 *              foa: "male"
 *              salutation: "Dr."
 *              first_name: "Max"
 *              last_name: "Mustermann"
 *              company: ""
 *              street: "Musterstr."
 *              streetnumber: "66"
 *              additional_info: null
 *              zip_code: "10117"
 *              city: "Berlin"
 *              country: "DE"
 *              phone: "012345678"
 *              email: "max@mustermann.de"
 *          }
 *      }
 *
 * @apiErrorTitle (CustomerNotFound) Es konnte kein Kunde gefunden werden.
 * @apiErrorStructure AccessError
 * @apiErrorStructure FunctionError
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not found
 *     {
 *       "errors":[
 *           {
 *               "title" : "No Customer found",
 *               "status": "404",
 *           }
 *       ]
 *     }
 */

/**
 * @api {post} /customer/item Kunden anlegen
 * @apiName AddCustomer
 * @apiGroup Customer
 * @apiVersion 1.0.2
 * @apiPermission apikey
 * @apiDescription Erstellt einen neuen Endkunden im System.
 *
 * @apiParam {String} email Email Adresse des Kunden.
 * @apiParam {String} [password] Passwort ist optional. Wenn leer wird automatisch eines generiert beim Anker anlegen.
 * @apiParam {String} [company] Firma
 * @apiParam {String} [foa] Anrede, "female" = Frau, "male" = Herr oder leer
 * @apiParam {String} [salutation] Titel
 * @apiParam {String} [first_name] Vorname
 * @apiParam {String} last_name Nachname
 * @apiParam {String} [street] Straße
 * @apiParam {String} [streetnumber] Hausnummer
 * @apiParam {String} [zip_code] Postleitzahl
 * @apiParam {String} [city] Stadt
 * @apiParam {String} [birthday] Geburstag in der Form Y-m-d
 * @apiParam {String} [country] Land (Möglich gerade: deu, aut)
 * @apiParam {String} [additional_info] Addresszusatz
 * @apiParam {String} [phone] Mobil oder Telefonnummer für Rückfragen
 * @apiParam {String} [phone_code] Telefonnummer Vorwahl
 * @apiParam {String} [anchor_delivery_date] Ankerliefertermin als Tag im Format Y-m-d
 * @apiParam {String} [anchor_delivery_time] Ankerliefertermin als Uhrzeit im Format H:i:s
 *
 * @apiSuccess (Success 204) {Object[]} Customer wie in /customer/item/:customer_nr beschrieben
 *
 * @apiError anchor_delivery_date Datum falsch formartiert
 * @apiError anchor_delivery_time Uhrzeit falsch formartiert
 * @apiError country Das Land ist unbekannt
 * @apiError last_name Kein Nachname angegeben
 *
 */


/**
 * @api {get} /delivery/list Sendungen
 * @apiName GetDeliveries
 * @apiGroup Delivery
 * @apiVersion 1.0.0
 * @apiPermission apikey
 * @apiDescription Liefert eine Liste der noch nicht zugestellten Sendungen zurück die dem ServiceProvider zugewiesen sind oder erstellt wurden. Die Ausgabe ist auf maximal 100 Sendungen beschränkt. Weitere Filteroptionen werden folgen.
 *
 * @apiSuccess {Object[]} Deliveries Rückgabe eines Arrays mit Delivery Objekten wie in /deliveries/item beschrieben.
 *
 */

 /**
 * @api {get} /delivery/item/:id Sendung abfragen
 * @apiName GetDeliveryById
 * @apiGroup Delivery
 * @apiVersion 1.0.0
 * @apiPermission apikey
 * @apiDescription Zu einer Sendung werden alle Informationen zurückgegeben. Dort sind die wichtigsten
 * Tracking Events vorhanden.
 *
 * @apiParam {string} id Sendungs id mit 36 Zeichen.
 *
 * @apiSuccess {Object[]} Delivery
 * @apiSuccess {String} Delivery.id Sendungs ID mit 36-Zeichen
 * @apiSuccess {String} Delivery.href API-Url zur Sendung
 * @apiSuccess {String} Delivery.anchor_nr Ankernummer der Sendung
 * @apiSuccess {String} Delivery.customer_nr Kundennummer
 * @apiSuccess {Number} Delivery.tracking_nr Sendungsnummer zur Verfolgung
 * @apiSuccess {Number} Delivery.label_url Url zum PDF-Label
 * @apiSuccess {String} Delivery.status Aktueller Status der Sendung
 * @apiSuccess {String} Delivery.label_url Abfrage des Labels als PDF-Datei
 * @apiSuccess {Object[]} Delivery.boxes
 * @apiSuccess {Number} Delivery.boxes.box_nr Nummer einer einzelnen Box
 * @apiSuccess {String} Delivery.boxes.type Type einer Box (z.B.: m,l,xl,thermo)
 * @apiSuccess {String} Delivery.reference Referenz Nummer. Ist auf dem Label abgedruckt. Entweder die ersten 20-Zeichen oder als Barcode bei 12-stelligen numerischen Wert.
 * @apiSuccess {String} Delivery.to_company 
 * @apiSuccess {String} Delivery.to_foa 
 * @apiSuccess {String} Delivery.to_salutation 
 * @apiSuccess {String} Delivery.to_first_name 
 * @apiSuccess {String} Delivery.to_last_name 
 * @apiSuccess {String} Delivery.to_street 
 * @apiSuccess {String} Delivery.to_streetnumber
 * @apiSuccess {String} Delivery.to_additional_info
 * @apiSuccess {String} Delivery.to_zip_code
 * @apiSuccess {String} Delivery.to_city
 * @apiSuccess {String} Delivery.to_country
 * @apiSuccess {String} Delivery.to_phone
 * @apiSuccess {String} Delivery.to_email
 * @apiSuccess {String} Delivery.from_company
 * @apiSuccess {String} Delivery.from_foa
 * @apiSuccess {String} Delivery.from_salutation
 * @apiSuccess {String} Delivery.from_first_name
 * @apiSuccess {String} Delivery.from_last_name
 * @apiSuccess {String} Delivery.from_street
 * @apiSuccess {String} Delivery.from_streetnumber
 * @apiSuccess {String} Delivery.from_additional_info
 * @apiSuccess {String} Delivery.from_zip_code
 * @apiSuccess {String} Delivery.from_city
 * @apiSuccess {String} Delivery.from_country
 * @apiSuccess {String} Delivery.from_phone
 * @apiSuccess {String} Delivery.from_email
 * @apiSuccess {Date} Delivery.date_start Datum an welchem die Sendung zur Auslieferung bereit ist.
 * @apiSuccess {Time} Delivery.delivery_time Zustell-Zeitfenster
 * @apiSuccess {Object[]} Delivery.tracking_events
 * @apiSuccess {string} Delivery.tracking_events.status Status
 * @apiSuccess {string} Delivery.tracking_events.details Beschreibung
 * @apiSuccess {Date} Delivery.tracking_events.created Datum
 *
 * @apiSuccessExample Success-Responce:
 *
 *      HTTP/1.1 200 OK
 *      {
 *          Delivery: {
 *              id: "543ced73-fddc-47d9-af01-04ddfb6fadfa"
 *              href: "https://api.lockboxsystem.com/v1/delivery/item/543ced73-fddc-47d9-af01-04ddfb6fadfa"
 *              anchor_nr: "A00123"
 *              customer_nr: "12345678"
 *              tracking_nr: "000079792"
 *              tracking_url: "https://www.lockboxsystem.com/track?nr=000079792&zip=10117"
 *              label_url: "https://api.lockboxsystem.com/v1/delivery/label/543ced73-fddc-47d9-af01-04ddfb6fadfa.pdf"
 *              status: "DeliveryCreated"
 *              boxes: [
 *                  {
 *                      box_nr: "0000797921"
 *                      type: "xl"
 *                  },
 *                  {
 *                      box_nr: "0000797922"
 *                      type: "m"
 *                  }
 *              ]
 *              reference: "1234215"
 *              to_company: ""
 *              to_foa: "male"
 *              to_salutation: "Dr."
 *              to_firt_name: "Max"
 *              to_last_name: "Mustermann"
 *              to_street: "Musterstraße"
 *              to_streetnumber: "66"
 *              to_additional_info: null
 *              to_zip_code: "10117"
 *              to_city: "Berlin"
 *              to_country: "DE"
 *              from_company: "Shopname"
 *              from_foa: ""
 *              from_salutation: ""
 *              from_firt_name: ""
 *              from_last_name: ""
 *              from_street: ""
 *              from_streetnumber: ""
 *              from_additional_info: ""
 *              from_zip_code: ""
 *              from_city: ""
 *              from_country: "DE"
 *              date_start: "2014-10-16"
 *              delivery_time: "18:00:00"
 *              tracking_events: [
 *                  {
 *                      status: "BoxDelivery.DeliveryCreated"
 *                      details: "Lieferung für ServiceProvider 'Shopname' erstellt an Kunden 'Max Mustermann'."
 *                      created: "2014-10-14T11:31:31+02:00"
 *                  },
 *                  {
 *                      status: "BoxDelivery.DeliveryAssignedSP"
 *                      details: "Lieferung L000079792 an Kunden 'Max Mustermann' wurde an Lieferdienst 'Versandservice' zur Auslieferung übergeben."
 *                      created: "2014-10-14T11:31:31+02:00"
 *                  }
 *              ]
 *              created: "2014-10-14T11:31:31+02:00"
 *          }
 *      }
 *
 *
 * @apiErrorStructure AccessError
 * @apiErrorStructure FunctionError
 *
 */

 /**
 * @api {post} /delivery/item Sendung anlegen
 * @apiName AddDeliveryById
 * @apiGroup Delivery
 * @apiVersion 1.0.0
 * @apiPermission apikey
 * @apiDescription Eine neue Sendung wird im System angelegt. Das angeben einer Empfänger-Adresse ist optional wenn eine Ankernummer angegeben wurde. Für Lieferungen an nicht Lockbox-Kunden mit Anker muss die vollständige Adresse gesendet werden. 
 * Der Absender der Sendung wird über den API-Key automatisch ermittelt. Aufruf gibt Fehlermeldungen wenn die Erstellung der Sendung nicht erfolgreich war.
 * Bei erfolgreichem Anlegen einer Sendung wird das Delivery Obejct wie oben beschrieben zurückgegeben.
 *
 * @apiParam {Object[]} [boxes] Verwendeten Boxen, Boxen können aktuell nur über das LTS zu einer Sendung später hinzugefügt werden.
 * @apiParam {String} [boxes.type] Box Type (z.B.: m,l,xl,thermo)
 * @apiParam {String} [anchor_nr] Ankernummer in der Form a123, A123 oder A00123
 * @apiParam {String} [to_foa] Anrede, "female" = Frau, "male" = Herr oder leer
 * @apiParam {String} [to_salutation] Titel
 * @apiParam {String} [to_first_name] Vorname
 * @apiParam {String} [to_last_name] Nachname
 * @apiParam {String} [to_company] Firma
 * @apiParam {String} [to_street] Straße
 * @apiParam {String} [to_streetnumber] Hausnummer
 * @apiParam {String} [to_zip_code] Postleitzahl
 * @apiParam {String} [to_city] Stadt
 * @apiParam {String} [to_country] Land (Möglich gerade: deu, aut)
 * @apiParam {String} [to_additional_info] Addresszusatz
 * @apiParam {String} [to_phone] Mobil oder Telefonnummer für Rückfragen
 * @apiParam {String} [to_email] Wenn eine Ankernummer gegeben aber unbekannt ist wird ein neuer Kunde angelegt. In diesem Fall werden to_first_name, to_last_name, to_street, to_streetnumber, to_zip_code, to_city, to_country und to_email zum Plfichtfeld.
 * @apiParam {Number} [reference] Referenz Nummer aus dem eigenen System. Auch als String möglich. Wird auf dem Label abgebildet als Barcode bei numerischen Werten oder die ersten 20-Zeichen bei Text.
 * @apiParam {Date} [date_start] Ab welchem Datum die Sendung abgeholt werden kann. Dies erlaubt es Sendungen in der Zukunft zu erstellen um das Label im internen Prozess zu verwenden. In der Form Y-m-d. Ohne vorgegebenes Datum wird die Sendung als sofort verfügbar erstellt.
 * @apiParam {Time} [delivery_time] Gewünschte Zustellung zur genannten Uhrzeit. Zeitraum +2 Stunden. Gilt nur für Empfänger ohne Lockbox-Anker. In der Form H:i:s. Dieses Feld wird Pflicht wenn keine Ankernummer angegeben wurde.
 *
 * @apiSuccess (Success 204) {Object[]} Delivery wie in /delivery/item/:id beschrieben
 *
 * @apiError anchor_nr Ankernummer unbekannt oder falsch
 * @apiError date_start Datum falsch formartiert
 * @apiError delivery_time Zustell-Zeitfenster Uhrzeit falsch formartiert
 * @apiError boxes Nicht als Array oder mehr als 9
 * @apiError boxes.type Der gegebene Type ist nicht bekannt
 * @apiError to_country Das Land ist unbekannt
 *
 */

 /**
 * @api {get} /delivery/label/:id.pdf Sendungs Label
 * @apiName GetDeliveryLabelById
 * @apiGroup Delivery
 * @apiVersion 1.0.0
 * @apiPermission apikey
 * @apiDescription Ausgabe des Labels zum drucken. Das Label beinhaltet eine Seite für jede Box im Format 60x100mm.
 *
 * @apiParam {string} id Sendungs id mit 36 Zeichen.
 *
 * @apiSuccess {PDF} Label Ausgabe einer PDF-Datei
 */


 /**
 * @api {get} /box/item/:box_nr Box abfragen
 * @apiName GetDeliveryBoxNr
 * @apiGroup DeliveryBoxes
 * @apiVersion 1.0.1
 * @apiPermission apikey
 * @apiDescription Gibt Informationen zu einer Box einer Sendung aus
 *
 * @apiParam {string} box_nr Box Nummer
 *
 * @apiSuccess {Object[]} Box
 * @apiSuccess {String} Box.box_nr Box Nummer
 * @apiSuccess {String} Box.delivery_id ID der Sendung
 * @apiSuccess {String} Box.type Box Type
 * @apiSuccess {String} Box.description Beschreibung der Box
 * @apiSuccess {Boolean} Box.is_in_a_box Diese Box befindet sich in einer anderen Box. Dies bedeutet das kein Label existiert.
 * @apiSuccess {String} Box.label_url Label der einzelnen Box
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *           Box: {
 *              delivery_id: "54bfcbe0-c930-4811-9615-03f2fb6fadfa"
 *              box_nr: "0000382932"
 *              type: "s"
 *              description: "Small"
 *              is_in_a_box: false
 *              label_url: "https://api.lockboxsystem.com/v1/box/label/0000382932.pdf"
 *          }
 *      }
 *
 * @apiErrorTitle (BoxNotFound) Die Box konnte nicht gefunden werden.
 * @apiErrorStructure AccessError
 * @apiErrorStructure FunctionError
 * @apiError (Error 400) box_nr Keine Box Nummer angegeben.
 */

 /**
 * @api {post} /box/item Box anlegen
 * @apiName AddDeliveryBox
 * @apiGroup DeliveryBoxes
 * @apiVersion 1.0.1
 * @apiPermission apikey
 * @apiDescription Fügt eine Box einer Sendung hinzu. 
 *
 * @apiParam {string} delivery_id Sendungsnummer
 * @apiParam {string} type Box Type
 *
 * @apiSuccess {Object[]} Box Wie in /box/item/:box_nr beschrieben
 *
 * @apiErrorTitle (BoxTypeNotFound) Box Type wurde nicht gefunden
 * @apiErrorTitle (DeliveryNotFound) Die Sendung wurde nicht gefunden.
 * @apiErrorStructure AccessError
 * @apiErrorStructure FunctionError
 */

 /**
 * @api {delete} /box/item/:box_nr Box entfernen
 * @apiName DeleteDeliveryBoxNr
 * @apiGroup DeliveryBoxes
 * @apiVersion 1.0.1
 * @apiPermission apikey
 * @apiDescription Entfernt eine bereits hinzugefügte Box. Aktuell ist ist nur möglich die letzte Box zu entfernen da diese für alle Labels durchnummeriert sind.
 *
 * @apiParam {string} box_nr Box Nummer
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 204 No Content
 *
 * @apiErrorStructure AccessError
 * @apiErrorStructure FunctionError
 * @apiError (Error 400) box_nr Keine box_nr angegeben.
 * @apiError (Error 400) BoxNotFound Die box_nr konnte nicht gefunden werden.
 * @apiError (Error 400) DeliveryPickedup Die Sendung wurde bereits eingeladen und kann nicht mehr verändert werden.
 * @apiError (Error 400) BoxLast Es wurde nicht die letzte Box entfernt.
 */