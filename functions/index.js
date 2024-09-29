"use strict";

const { onRequest } = require("firebase-functions/v2/https");

exports.postLead = onRequest(
    {
      region: ["us-east1"],
      cors: ["educacau.com.br"],
    },
    async (req, res) => {

      const lead = {
        "name": "Nome teste",
        "phone": "47996718611",
      }

      try {
        await fetch("https://us-east1-educacau-ae429.cloudfunctions.net/ext-http-export-sheets-saveRecord", {
          method: "POST",
          body: JSON.stringify(lead)
        })
      } catch (e) {
        logger.error("Some error occurred while trying to save lead:", lead);
      }

      res.status(200).send();
    },
);
