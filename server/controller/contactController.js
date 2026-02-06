const Contact = require("../model/Contact")

const AddContact = async (req, res) => {
  try {
    const contact =await Contact.create(req.body);

    return res.json({
      message: "contact created sucessfully",
      
      contact: contact,
      status: true
    });
  } catch (err) {
    return res.json({
      message: "Error while create contact",
      status: false,
    });
  }
};

const GetContact =  async(req,res)=>{
    try{
        const dfgh =await Contact.find()

        return res.json({
            message: "contact get sucessful",
            contacts:dfgh,
            status:true
        });
    }
    catch(err){
        console.log(err);

        return res.json({
            message:"Error while fetch",
            status: false,
        });
    }
};

const UpdateContact = async (req,res)=>{
    try{
        const UpdatedContact= await Contact.findByIdAndUpdate(req.params.id,req.body )

        return res.json({
            message: "updated sucessfully",
            // id:req.params.id
            status:true,
            UpdatedContact
        })
    }
    catch(err){
        return res.json({
            message: "error while update",
            status: false
        
        });
    }
}

const DeleteContact = async (req,res)=>{
    try{
        const deletecontact= await Contact.findByIdAndDelete(req.params.id)

        return res.json({
            message: "deleted sucessful",
            status:true,
            deletecontact
        });
        
    }
    catch(err){
        console.log(err);
        return res.json({
            message: "error while delete",
            status: false
        
        });
    }
}
module.exports = {
  AddContact,
  GetContact,
  UpdateContact,
  DeleteContact,
};