async function fetchData(path, cb) {
  try {
    const res = await fetch(path);
    const txt = await res.text();
    const splited = txt.split(/\r\n\r\n/g);
    splited.forEach((item) => {
      const section = item.trim().split(/\r\n/g);
      // regexp[section[0]] = new RegExp(section[1].replace(/\//g, ""));
      cb(section.trim());
    });
  } catch (err) {
    console.error("Error:", err);
  }
}

export default fetchData;
