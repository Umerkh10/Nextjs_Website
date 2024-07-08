"use server"

export async function FormAction(state, formData) {


    const name = formData.get("name")
    const email = formData.get("email")
    const phone = formData.get("phone")
    const selection = formData.get("selection")

  

    try {
        const url = "http://localhost:3000/api"
        const res = await fetch(url, {
            "Content-Type" :"application/json",
            method: 'POST',
            body: JSON.stringify({name,email,phone,selection})
          })
 
          if(res.ok === "true"){
              return { message: "Form Submitted Success" }
          }

    } catch (error) {

        return { error: "Error in Form Submittion" }
    }


}