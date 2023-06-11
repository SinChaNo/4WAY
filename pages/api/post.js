const post = (res, req) => {
  if (res.method == 'GET'){
    return(req.status(200).json("POST API"))
  }
}

export default post;