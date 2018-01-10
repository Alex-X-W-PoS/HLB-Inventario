(function(window, undefined) {
  var dictionary = {
    "e7f449b1-fddf-4513-93d5-e2153dc7b0ee": "Agregar_Item",
    "ed52a59b-d351-4751-9a7d-4c4fb8bda1d0": "Pedidos-nuevo",
    "06f23307-9dc2-4d5b-a06b-ef2834f4a800": "Reporte",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Inicio",
    "018af786-b867-4fd4-a322-7dae2923fc9f": "Pedidos",
    "87db3cf7-6bd4-40c3-b29c-45680fb11462": "960 grid - 16 columns",
    "e5f958a4-53ae-426e-8c05-2f7d8e00b762": "960 grid - 12 columns",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template_Farmacias_ECUH",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);