"use strict";

const { onRequest } = require("firebase-functions/v2/https");

exports.postLead = onRequest(
    {
      region: ["us-east1"],
      cors: true,
    },
    async (req, res) => {

      const lead = req.body

      try {
        await fetch("https://us-east1-educacau-ae429.cloudfunctions.net/ext-http-export-sheets-saveRecord", {
          method: "POST",
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(lead),
        })
      } catch (e) {
        logger.error("Some error occurred while trying to save lead:", lead);
        res.status(500).send()
        return
      }

      res.status(200).send()
    },
);
