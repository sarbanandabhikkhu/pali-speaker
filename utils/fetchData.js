async function fetchData(path, cb) {
  try {
    const res = await fetch(path);
    const txt = await res.text();
    const splited = txt.split(/\n\n/);
    splited.forEach((item) => cb(item.trim().split(/\n/)));
  } catch (err) {
    console.error("Error:", err);
  }
}

export default fetchData;
