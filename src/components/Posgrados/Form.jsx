import { useState } from "react";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function Form() {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    nombres: "",
    apellidos: "",
    tipoDocumento: "",
    numeroDocumento: "",
    ciudad: "",
    tipoVisitante: "",
    correo: "",
    telefonoMovil: "",
    facultadInteres: "",
    programaInteres: "",
    aceptaTerminos: false,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleCheckboxChange = (event) => {
    setFormValues({ ...formValues, aceptaTerminos: event.target.checked });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/inscripcion')

  };

  return (
    <div className="bg-sky-600  md:w-2/3 p-6 rounded-3xl md:mt-72 mx-4">
      <form className="" onSubmit={handleSubmit}>
        <h1 className="text-xl text-white">Confirma tu asistencia aquí</h1>
        <TextField
          label="Nombres"
          name="nombres"
          variant="filled"
          fullWidth
          margin="normal"
          required
          value={formValues.nombres}
          onChange={handleChange}
          sx={{ backgroundColor: "white"}}
        />
        <TextField
          label="Apellidos"
          name="apellidos"
          variant="filled"
          fullWidth
          margin="normal"
          required
          value={formValues.apellidos}
          onChange={handleChange}
          sx={{ backgroundColor: "white" }}
        />
        <FormControl
          variant="filled"
          fullWidth
          margin="normal"
          sx={{ backgroundColor: "white" }}
        >
          <InputLabel id="tipo-documento-label">Tipo de documento*</InputLabel>
          <Select
            labelId="tipo-documento-label"
            label="Tipo de documento*"
            name="tipoDocumento"
            required
            value={formValues.tipoDocumento}
            onChange={handleChange}
            sx={{ backgroundColor: "white" }}
          >
            <MenuItem value="CC">CC</MenuItem>
            <MenuItem value="CE">CE</MenuItem>
            <MenuItem value="TI">TI</MenuItem>
            <MenuItem value="RC">RC</MenuItem>
          </Select>
        </FormControl>

        <TextField
          label="Número de documento"
          name="numeroDocumento"
          variant="filled"
          fullWidth
          margin="normal"
          required
          value={formValues.numeroDocumento}
          onChange={handleChange}
          sx={{ backgroundColor: "white" }}
        />
        <TextField
          label="Ciudad"
          name="ciudad"
          variant="filled"
          fullWidth
          margin="normal"
          required
          value={formValues.ciudad}
          onChange={handleChange}
          sx={{ backgroundColor: "white" }}
        />

        <FormControl
          variant="filled"
          fullWidth
          margin="normal"
          sx={{ backgroundColor: "white" }}
        >
          <InputLabel id="tipo-documento-label">Tipo de visitante*</InputLabel>
          <Select
            labelId="tipoVisitante-label"
            label="Tipo de Visitante*"
            name="tipoVisitante"
            required
            value={formValues.tipoVisitante}
            onChange={handleChange}
            sx={{ backgroundColor: "white" }}
          >
            <MenuItem value="01">opcion 1</MenuItem>
            <MenuItem value="02">opcion 2</MenuItem>
          </Select>
        </FormControl>

        <TextField
          label="Correo"
          name="correo"
          variant="filled"
          fullWidth
          margin="normal"
          required
          value={formValues.correo}
          onChange={handleChange}
          sx={{ backgroundColor: "white" }}
        />
        <TextField
          label="Teléfono móvil"
          name="telefonoMovil"
          variant="filled"
          fullWidth
          margin="normal"
          required
          value={formValues.telefonoMovil}
          onChange={handleChange}
          sx={{ backgroundColor: "white" }}
        />

        <FormControl
          variant="filled"
          fullWidth
          margin="normal"
          sx={{ backgroundColor: "white" }}
        >
          <InputLabel id="facultadInteres-label">
            Facultad o àrea de interes*
          </InputLabel>
          <Select
            labelId="facultadInteres-label"
            label="Faculta o área de interes*"
            name="facultadInteres"
            required
            value={formValues.facultadInteres}
            onChange={handleChange}
            sx={{ backgroundColor: "white" }}
          >
            <MenuItem value="01">opcion 1</MenuItem>
            <MenuItem value="02">opcion 2</MenuItem>
          </Select>
        </FormControl>

        <FormControl
          variant="filled"
          fullWidth
          margin="normal"
          sx={{ backgroundColor: "white" }}
        >
          <InputLabel id="programa-label">Programa de interes*</InputLabel>
          <Select
            labelId="programaInteres-label"
            label="Programa de interes*"
            name="programaInteres"
            required
            value={formValues.programaInteres}
            onChange={handleChange}
            sx={{ backgroundColor: "white" }}
          >
            <MenuItem value="01">opcion 1</MenuItem>
            <MenuItem value="02">opcion 2</MenuItem>
          </Select>
        </FormControl>

        <FormControlLabel
          control={
            <Checkbox
              checked={formValues.aceptaTerminos}
              onChange={handleCheckboxChange}
              name="aceptaTerminos"
              sx={{ color: "white" }}
            />
          }
          label="Acepto términos y condiciones."
        />
      <Button
        type="submit"
        variant="contained"
        sx={{ backgroundColor: "blue", color: "white" }}
      >
        Enviar
      </Button>
      </form>
    </div>
  );
}

export default Form;
