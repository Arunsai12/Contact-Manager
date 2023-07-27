<template>
    <div class="container mt-3">
      <div class="row">
        <div class="col">
          <p class="h3 text-success fw-bold">Add Contact</p>
          <p class="fst-italic">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur exercitationem distinctio laudantium hic incidunt ipsam mollitia perspiciatis omnis iusto. Soluta error quo, molestiae libero laborum vitae? Possimus voluptatem iusto officiis!</p>
        </div>
      </div>
    </div>   
    <div class="container mt-3">
      <div class="row">
        <div class="col-md-4">
          <form @submit.prevent="submitCreate()">
            <div class="mb-2">
              <input v-model="contact.name" required type="text" class="form-control" placeholder="Name">
            </div>
            <div class="mb-2">
              <input v-model="contact.photo" requiredtype="text" class="form-control" placeholder="Photo Url">
            </div>
            <div class="mb-2">
              <input v-model="contact.email" requiredtype="email" class="form-control" placeholder="Email">
            </div>
            <div class="mb-2">
              <input v-model="contact.mobile" required type="number" class="form-control" placeholder="Moblie">
            </div>
            <div class="mb-2">
              <input v-model="contact.company" requiredtype="text" class="form-control" placeholder="Company">
            </div>
            <div class="mb-2">
              <select v-model="contact.groupId" required class="form-control" v-if="grops.length>0">
                <option value="">Select Group</option>
                <option :value="group.id" v-for="group of grops" :key="group.Id">{{ group.name }}</option>
              </select>
            </div>
            <div class="mb-2">
              <input type="submit" class="btn btn-success" Value="Creat">
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
    name :'AddContact',
    data : function(){
      return{
        contact:{
          name:'',
          company:'',
          email:'',
          title:'',
          mobile:'',
          photo:'',
          groupId:''
        },
        grops:[]
      }
    },
    created: async function(){
      try{
        let response=await ContactService.getAllGroups();
        this.grops=response.data
      }
      catch(error){
        console.log(error)
      }
    },
    methods:{
      submitCreate:async function(){
        try{
          let response =await ContactService.createContact(this.contact);
          if(response){
              return this.$router.push('/');
          }
          else{
              return this.$router.push('/AddContact');
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