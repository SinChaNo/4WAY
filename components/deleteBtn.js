'use client'

const DeleteBtn = ( { result } ) => {
  return (
    <button 
      type="button" 
      className="inline-flex items-center text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
      onClick={(e) => {
        fetch(
          '/api/delete',
          {
            method: 'POST',
            body : result._id,
          }
        ).then((r) => {
          if(r.status == 200) {
            return r.json();
          }else {
            // 서버 에러일 시 실행할 코드
          }
        })
        .catch((error)=>{
          //인터넷문제 등으로 실패시 실행할코드
          console.log(error)
        })
      }}
    >
      <svg aria-hidden="true" className="w-5 h-5 mr-1.5 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
      Delete
    </button>
  )
}

export default DeleteBtn;