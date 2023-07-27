<template>
    <div class="container mt-3">
      <div class="row">
        <div class="col">
          <p class="h3 text-success fw-bold">Contact Manager
            <router-link to="/AddContact" class="btn btn-success btn-sm"><i class="fa fa-plus-circle"></i>New</router-link>
          </p>
          <p class="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam maiores aliquam illo laudantium repellendus voluptatum nostrum error. Accusamus eaque cumque deserunt vero labore dolor aperiam molestiae omnis? Earum, delectus sequi.</p>
          <form> 
            <div class="row">
              <div class="col-md-6">
                <div class="row">
                  <div class="col">
                    <input type="text" class="form-control" placeholder="Search Name">
                  </div>
                  <div class="col">
                    <input type="submit" class="btn btn-outline-dark">
                  </div>
                </div>
              </div>
            </div>  
          </form>
        </div>
      </div>
    </div>
    <div class="container mt-3" v-if="contacts.length>0">
      <div class="row">
        <div class="col-md-6" v-for="contact in contacts" :key="contact.Id">
          <div class="card my-2 list-group-item-success shadow-lg">
            <div class="card-body">
              <div class="row align-items-center">
                <div class="col-sm-4">
                  <img :src="contact.photo" alt="image" class="contact-img">
                </div>
                <div class="col-sm-7">
                  <ul class="list-group">
                    <li class="list-group-item">Name : <span class="fw-bold">{{ contact.name }}</span></li>
                    <li class="list-group-item">Email : <span class="fw-bold">{{contact.email}}</span></li>
                    <li class="list-group-item">Mobile : <span class="fw-bold">{{contact.mobile}}</span></li>
                  </ul>    
                </div>
                <div class="col-sm-1">
                  <router-link :to="`/view${contact.id}`" class="btn btn-warning my-1"> 
                    <i class="fa fa-eye"></i>
                  </router-link>
                  <router-link :to="`/edit${contact.id}`" class="btn btn-primary my-1"> 
                    <i class="fa fa-pen"></i>
                  </router-link>
                  <button class="btn btn-danger my-1" @click="deletContact(contact.id)">
                    <i class="fa fa-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import ContactServices from "../services/ContactService"
  export default{
    name :'ContactManager',
    data : function(){
      return{
         loding : false,
         contacts : [],
         errorMessage : null
      }
    },
    created :async function(){
      try{
        this.loding=true;
        let response = await ContactServices.getAllContacts();
        this.contacts = response.data;
        this.loding=false;
      }
      catch(error){
        this.errorMessage = error;
        this.loding=false;
      }
    },
    methods : {
      deletContact: async function(contactid){
        try{
          let response = await ContactServices.deleteContact(contactid)
          if(response){
            let response = await ContactServices.getAllContacts();
            this.contacts = response.data;
          }
        }
        catch(error){
            console.warn(error)
        }
      }
    }
  }
</script>

<style >

</style>