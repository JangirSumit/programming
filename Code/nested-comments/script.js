const rootElement = document.getElementById("root");

function createComments(data, parent = rootElement) {
  for (let index = 0; index < data.length; index++) {
    const comment = data[index].comment;
    const reply = data[index].reply;

    if (comment) {
      parent.innerHTML += `<div id="${data[index].id}" style="margin-left: 20px;">${comment}</div>`;
      if (reply && reply.length) {
        createComments(reply, document.getElementById(`${data[index].id}`));
      }
    }
  }
}

createComments(comments);