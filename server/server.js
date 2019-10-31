const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { exec } = require('child_process');
const path = require('path');

const PORT = 5000;
const app = express();
let counter = 1;

app.use(
  fileUpload({
    createParentPath: true
  })
);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.post('/compiler', (req, res) => {
  try {
    if (!req.files) {
      return res.status(400).json({ msg: 'No file uploaded' });
    }
    const { graph } = req.files;

    graph.mv(`./res/retrained_graph${counter}.pb`);

    const command = `./bonnet_model_compiler.par --frozen_graph_path=./res/retrained_graph${counter}.pb --output_graph_path=./compiled/car${counter}.binaryproto --input_tensor_name=input --output_tensor_names=final_result --input_tensor_size=160`;

    exec(command, err => {
      if (err) {
        counter += 1;
        return res.status(500).json({ msg: 'Error al compilar' });
      }
      const options = {
        root: __dirname,
        headers: {
          'content-type': 'application/octet-stream'
        }
      };
      return res.sendFile(
        `./compiled/car${counter}.binaryproto`,
        options,
        () => {
          counter += 1;
        }
      );
    });
  } catch (err) {
    res.status(500).json({ msg: 'Sever Error' });
    counter += 1;
  }
  return false;
});

app.use(express.static(path.resolve(__dirname, '..', 'client', 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'client', 'build', 'index.html'));
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server started on port ${PORT}`);
});
