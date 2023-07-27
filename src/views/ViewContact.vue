<template>
    <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 text-success fw-bold">View Contact</p>
        <p class="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quo sint, ea labore enim alias minus, omnis doloribus voluptatum, assumenda libero repellendus obcaecati culpa ipsum adipisci vero quas? Maiores, repellat. </p>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row align-items-center">
      <div class="col-md-4">
        <img :src="contact.photo" alt="" class="contact-img-big">
      </div>
      <div class="col-md-6">
        <ul class="list-group">
          <li class="list-group-item">Name : <span class="fw-bold">{{ contact.name }}</span></li>
          <li class="list-group-item">Email : <span class="fw-bold">{{contact.email}}</span></li>
          <li class="list-group-item">Mobile : <span class="fw-bold">{{contact.mobile}}</span></li>
          <li class="list-group-item">Company : <span class="fw-bold">{{contact.company}}</span></li>
          <li class="list-group-item">Title : <span class="fw-bold">{{contact.title}}</span></li>
          <li class="list-group-item">Group : <span class="fw-bold">{{group.name}}</span></li>
        </ul>  
      </div>
    </div>
    <div class="row mt-3">
    <div class="col">
      <router-link to="/" class="btn btn-success"><i class="fa fa-arrow-circle-left"></i> Back</router-link>
    </div>
  </div>
  </div>
</template>

<script>
import ContactService from '@/services/ContactService';
  export default{
    name :'ViewContact',
    data : function(){
      return {
        contactID : this.$route.params.contactID,
        contact: {},
        group: {}
      }
    },
     created: async function(){
         try{
           let response =await ContactService.getContact(this.contactID);
           let groupresponse = await ContactService.getGroup(response.data)
           this.contact=response.data;
           this.group=groupresponse.data;
         }
         catch(error){
             console.warn(error)
         }
     }
  }
</script>

<style lang="scss" scoped>

</style>