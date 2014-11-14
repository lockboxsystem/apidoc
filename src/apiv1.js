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
 * @api {get} /customer/anchor/:anchor_nr Kunde abfragen
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
 * @apiSuccess {Number} Customer.foa Anrede, 0 für Frau, 1 für Herr
 * @apiSuccess {String} Customer.first_name Vorname
 * @apiSuccess {String} Customer.last_name Nachname
 * @apiSuccess {String} Customer.company Firma
 * @apiSuccess {String} Customer.street Straße
 * @apiSuccess {String} Customer.streetnumber Hausnummer 
 * @apiSuccess {String} Customer.additional_info Adresszusatz, Etage, Eingang
 * @apiSuccess {Number} Customer.zip_code Postleitzahl
 * @apiSuccess {String} Customer.city Stadt
 * @apiSuccess {String} Customer.country Land, ISO 3166-1 alpha-2 code
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *           Customer: {
 *              customer_nr: "12345678"
 *              anchor_nr: "A00123"
 *              foa: "1"
 *              first_name: "Max"
 *              last_name: "Musterman"
 *              company: ""
 *              street: "Musterstr."
 *              streetnumber: "66"
 *              additional_info: null
 *              zip_code: "10117"
 *              city: "Berlin"
 *              country: "DE"
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
 * @apiSuccess {String} Delivery.anchor_nr Ankernummer der Sendung
 * @apiSuccess {Number} Delivery.tracking_nr Sendungsnummer zur Verfolgung
 * @apiSuccess {String} Delivery.status Aktueller Status der Sendung
 * @apiSuccess {String} Delivery.label_url Abfrage des Labels als PDF-Datei
 * @apiSuccess {Object[]} Delivery.boxes
 * @apiSuccess {Number} Delivery.boxes.box_nr Nummer einer einzelnen Box
 * @apiSuccess {String} Delivery.boxes.type Type einer Box (z.B.: m,l,xl,thermo)
 * @apiSuccess {String} Delivery.reference Referenz Nummer. Ist auf dem Label abgedruckt. Entweder die ersten 20-Zeichen oder als Barcode bei 12-stelligen numerischen Wert.
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
 *              to_firt_name: "Max"
 *              to_last_name: "Mustermann"
 *              to_street: "Musterstraße"
 *              to_streetnumber: "66"
 *              to_additional_info: null
 *              to_zip_code: "10117"
 *              to_city: "Berlin"
 *              to_country: "DE"
 *              from_company: "Shopname"
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
 * @apiDescription Eine neue Sendung wird im System angelegt. Das angeben einer Empfänger-Adresse ist optional. Für Lieferungen an existierende Lockbox-Kunden wird nur die Ankernummer benötigt. 
 * Der Absender der Sendung wird über den API-Key automatisch ermittelt. Aufruf gibt Fehlermeldungen wenn die Erstellung der Sendung nicht erfolgreich war.
 * Bei erfolgreichem Anlegen einer Sendung wird das Delivery Obejct wie oben beschrieben zurückgegeben.
 *
 * @apiParam {Object[]} boxes Verwendeten Boxen
 * @apiParam {String} boxes.type Box Type (z.B.: m,l,xl,thermo)
 * @apiParam {String} [anchor_nr] Ankernummer in der Form a123, A123 oder A00123
 * @apiParam {String} [to_first_name] Vorname
 * @apiParam {String} [to_last_name] Nachname
 * @apiParam {String} [to_company] Firma
 * @apiParam {String} [to_steet] Straße
 * @apiParam {String} [to_streetnumber] Hausnummer
 * @apiParam {String} [to_zip_code] Postleitzahl
 * @apiParam {String} [to_city] Stadt
 * @apiParam {String} [to_country] Land (Möglich gerade: deu, aut)
 * @apiParam {String} [to_email] Wenn eine Ankernummer gegeben aber ungebekannt ist wird ein neuer Kunde angelegt. In diesem Fall werden to_first_name, to_last_name, to_street, to_streetnumber, to_zip_code, to_city, to_country und to_email zum Plfichtfeld.
 * @apiParam {Number} [reference] Referenz Nummer aus dem eigenen System. Auch als String möglich. Wird auf dem Label abgebildet als Barcode bei numerischen Werten oder die ersten 20-Zeichen bei Text.
 * @apiParam {Date} [date_start] Ob welchem Datum die Sendung abgeholt werden kann. Dies erlaubt es Sendungen in der Zukunft zu erstellen um das Label im internen Prozess zu verwenden. In der Form Y-m-d. Ohne vorgegebenes Datum wird die Sendung als sofort verfügbar erstellt.
 * @apiParam {Time} [delivery_time] Gewünschte Zustellung zur genannten Uhrzeit. Zeitraum +2 Stunden. Gilt nur für Empfänger ohne Lockbox-Anker. In der Form H:i:s. Dieses Feld wird Pflicht wenn keine Ankernummer angegeben wurde.
 *
 * @apiSuccess (Success 204) {Object[]} Delivery wie in /delivery/item/:id beschrieben
 *
 * @apiError anchor_nr Ankernummer unbekannt oder falsch
 * @apiError date_start Datum falsch formartiert
 * @apiError delivery_time Zustell-Zeitfenster Uhrzeit falsch formartiert
 * @apiError boxes Keine Boxen angeben, nicht als Array oder mehr als 9
 * @apiError boxes.type Der gegebene Type ist nicht bekannt
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