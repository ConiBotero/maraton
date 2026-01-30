const config = {
  "lang": "es",
  "localPort": "5173",
  "base": "https://ConiBotero.github.io",
  "baseurl": "/maraton",
  "title": "Maratón HDI",
  "subtitle": "trabajos de clase",
  "credits": "por los estudiantes HDI",
  "copyright": "Todos los derechos reservados 2026",
  "pages": {
    "iiifViewer": true,
    "metadataToShow": [
      {
        "key": "label",
        "label": "Label",
        "type": "text"
      },
      {
        "key": "autor",
        "label": "Autor",
        "type": "text"
      },
      {
        "key": "tecnica",
        "label": "Tecnica",
        "type": "text"
      },
      {
        "key": "titulo_obra_original",
        "label": "Titulo_obra_original",
        "type": "text"
      },
      {
        "key": "autor_original",
        "label": "Autor_original",
        "type": "text"
      },
      {
        "key": "temporalidad_obra_original",
        "label": "Temporalidad_obra_original",
        "type": "text"
      }
    ],
    "metadataToIndex": [
      "label",
      "tecnica",
      "titulo_obra_original",
      "autor_original",
      "temporalidad_obra_original"
    ]
  }
};
export default config;