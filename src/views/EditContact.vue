<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 text-success fw-bold">Edit Contact</p>
        <p class="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum incidunt reiciendis at. Dicta deleniti tempore voluptatem maiores, vel, minus eligendi et velit repellat praesentium soluta ducimus eos asperiores laudantium ex.</p>
      </div>
    </div>
  </div>
  <div class="container mt-3">
    <div class="row">
      <div class="col-md-4">
        <form @submit.prevent="updateSubmit()">
          <div class="mb-2">
            <input v-model="contact.name" type="text" class="form-control" placeholder="Name">
          </div>
          <div class="mb-2">
            <input v-model="contact.photo" type="text" class="form-control" placeholder="Photo Url">
          </div>
          <div class="mb-2">
            <input v-model="contact.email" type="email" class="form-control" placeholder="Email">
          </div>
          <div class="mb-2">
            <input v-model="contact.mobile" type="number" class="form-control" placeholder="Moblie">
          </div>
          <div class="mb-2">
            <input v-model="contact.company" type="text" class="form-control" placeholder="Company">
          </div>
          <div class="mb-2">
            <select v-model="contact.groupId" class="form-control" v-if="groups.length">
              <!-- <option value="">Select Group</option> -->
              <option :value="group.id" v-for="group of groups" :key="group.id">{{ group.name }}</option>
            </select>
          </div>
          <div class="mb-2">
            <input type="submit" class="btn btn-success" Value="Update ">
          </div>
        </form>
      </div>
      <div class="col-md-4">
          <img :src="contact.photo" alt="" class="contact-img">
        </div>
    </div>
  </div>
</template>
 
<script>
import ContactService from '@/services/ContactService';
  export default{
    name :'EditContact',
    data : function(){
      return {
        contactID : this.$route.params.contactID,
                contact: {
          "id": "",
          "name": "",
          "company": "",
          "email": "",
          "title": "",
          "mobile": "",
          "photo": "",
          "groupId": ""
        },
        groups: {}
      }
    },
    created: async function(){
         try{
           let response =await ContactService.getContact(this.contactID);
           let groupresponse = await ContactService.getAllGroups()
           this.contact=response.data;
           this.groups=groupresponse.data;
         }
         catch(error){
             console.warn(error)
         }
     },
     methods : {
      updateSubmit: async function(){
        try{
          let response =await ContactService.updateContact(this.contact,this.contactID);
          if(response){
              return this.$router.push('/');
          }
          else{
              return this.$router.push(`/edit:${this.contactID}`);
          }
        }
        catch(error){
            console.warn(error)
        }
      }
     }
  }
</script>

<style>

</style>