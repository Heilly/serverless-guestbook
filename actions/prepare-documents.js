/**
 * Prepare the guestbook entry to be persisted
 */
function main(params) {
  if (!params.name || !params.comment) {
    return Promise.reject({error: 'no name or comment'});
  }
 if(params.email == row.doc.email){
      return Promise.reject({ error: 'mismo email'});
 }
	return {
    doc: {
      createdAt: new Date(),
	    name: params.name,
	    email: params.email,
	    comment: params.comment,
	  }
  };
}
