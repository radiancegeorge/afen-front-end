import dayjs from "dayjs";

const Helper = {
  formatDate: (date_time: any, format = "DD-MM-YYYY hh:mm:ss A") => {
    if (!dayjs(date_time).isValid) return date_time;
    return dayjs(date_time).format(format);
  },
  serialize: function (obj: any = {}, prefix: any = "") {
    if (typeof obj !== "object") return obj;
    var str: Array<any> = [],
      p;
    for (p in obj) {
      if (obj.hasOwnProperty(p)) {
        var k = prefix ? prefix + "[" + p + "]" : p,
          v = obj[p];
        str.push(
          v !== null && typeof v === "object"
            ? this.serialize(v, k)
            : encodeURIComponent(k) + "=" + encodeURIComponent(v)
        );
      }
    }
    return str.join("&");
  },
  abbrev_name: function (string = "") {
    if (typeof string !== "string") return string;
    var split_names = string.trim().split(" ");
    var name = "";
    if (split_names.length > 1) {
      for (let i = 0; i < split_names.length; i++) {
        if (i === split_names.length - 1) {
          name +=
            " " +
            split_names[i].charAt(0).toUpperCase() +
            split_names[i].slice(1);
        } else {
          name += " " + split_names[i].charAt(0).toUpperCase();
        }
      }
    }
    return name;
  },
  toTitleCase: function (string: String) {
    if (typeof string !== "string") return string;
    return string.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  },
  noContentHtml: function () {
    return `
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>:(</h1>
          </div>
          <h2>404 - Content not found</h2>
          <p>
            The content you are looking for might have been removed had its name
            changed or is temporarily unavailable.
          </p>
        </div>
      </div>`;
  },
  capitalize: function (string: String) {
    if (typeof string !== "string") return string;
    if (typeof string !== "string") return "";
    return string.charAt(0).toUpperCase() + string.slice(1);
  },
};

export default Helper;
