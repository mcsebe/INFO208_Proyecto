import { useContext, useState, useEffect } from "react";
import "./write.css";
import axios from "axios";
import { Context } from "../../context/Context";

export default function Write() {
  const [cats, setCats] = useState([]);
  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);

  const [selectedFile, setSelectedFile] = useState(null);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [desc, setDesc] = useState("");
  const [state, setState] = useState("");
  const [categorie, setCategorie] = useState("");
  const [collaborator, setCollaborator] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();

    var finalState = "";
    var finalCategorie = "";
    if (state === "") {
      finalState = "Proposal of thesis";
    } else {
      finalState = state;
    }

    if (categorie === "") {
      finalCategorie = "Arquitectura y Urbanismo";
    } else {
      finalCategorie = categorie;
    }

    const newPost = {
      username: user.username,
      userPhone: user.phone,
      userEmail: user.email,
      author: author,
      state: finalState,
      date: date,
      title: title,
      collaborator: collaborator,
      categories: finalCategorie,
      desc: desc,
    };
    if (selectedFile) {
      const data = new FormData();
      const filename = Date.now() + selectedFile.name;
      data.append("name", filename);
      data.append("file", selectedFile);
      newPost.pdf = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }

    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {}
  };
  return (
    <div className="write">
      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="writeFormGroup2">
          <input
            type="text"
            placeholder="Author"
            className="writeInputAuthor"
            autoFocus={true}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <label className="labelDate"> Date</label>
          <input
            type="date"
            id="start"
            className="writeDate"
            name="trip-start"
            min="1960-01-01"
            max="2022-01-01"
            onChange={(e) => setDate(e.target.value.toString())}
          />
        </div>

        <div className="writeFormGroup2">
          <label for="lang" className="labelOption">
            State
          </label>
          <select
            name="languages"
            id="lang"
            className="writeOption"
            onChange={(e) => setState(e.target.value)}
          >
            <option value="proposal of thesis">Proposal of thesis</option>
            <option value="Developing">Developing</option>
            <option value="finished">Finished</option>
          </select>

          <label for="lang" className="labelState">
            Categorie
          </label>
          <select
            name="languages"
            id="lang"
            className="writeOption"
            onChange={(e) => setCategorie(e.target.value)}
          >
            {cats.map((c) => (
              <option className="sidebarListItem">{c.name}</option>
            ))}
          </select>
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Description..."
            type="text"
            className="writeInput2 writeText"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        <div className="writeFormGroup2">
          <input
            type="text"
            placeholder="Collaborator"
            className="writeInputAuthor"
            autoFocus={true}
            onChange={(e) => setCollaborator(e.target.value)}
          />
          <div className="pdf">
            <label htmlFor="fileInput2">PDF</label>
            <label htmlFor="fileInput2">
              <i class="pdfIcon fas fa-file-pdf"></i>
            </label>
            <input
              type="file"
              className="pdfIcon"
              id="fileInput2"
              style={{ display: "none" }}
              onChange={(e) => setSelectedFile(e.target.files[0])}
            />
            {selectedFile && <i class="Check fas fa-check-circle"></i>}
          </div>
        </div>

        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
