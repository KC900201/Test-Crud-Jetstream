<template>
    <div>
        <Navbar />
        <div class="container-fluid">
            <div class="columns">
                <div class="column is-four-fifths">
                    <p class="title">User List</p>
                </div>
                <div class="column">
                    <b-button>
                        <inertia-link :href="$route('users.create')"
                            >Create User
                        </inertia-link>
                    </b-button>
                </div>
            </div>

            <!--Create a User-->
            <b-table :data="users">
                <b-table-column field="id" label="ID" v-slot="props">
                    {{ props.row.id }}
                </b-table-column>
                <b-table-column field="name" label="Name" v-slot="props">
                    {{ props.row.name }}
                </b-table-column>
                <b-table-column field="email" label="Email" v-slot="props">
                    {{ props.row.email }}
                </b-table-column>
                <!-- <b-table-column v-slot="props">
                    <inertia-link :href="$route('users.edit', props.row.id)"
                        ><b-button>Edit</b-button></inertia-link
                    >
                    <b-button @click="deleteUser(props.row)">Delete </b-button>
                </b-table-column> -->
            </b-table>
        </div>
    </div>
</template>

<script>
// import { delete } from 'vue/types/umd';
import Navbar from "../Shared/Navbar";

export default {
    props: {
        users: Array | Object
    },
    components: {
        Navbar
    },
    data() {
        return {
            form: {
                name: "",
                email: "",
                password: ""
            }
        };
    },
    methods: {
        deleteUser(user) {
            console.log("this is delete action....");

            let confirmation = confirm("Are you sure to delete this user !");
            if (confirmation) {
                this.$inertia.delete(
                    route("users.destroy", user.id),
                    this.form
                );
            }
        }
        // createUser(user) {
        //     console.log("this is creatre action....");
        //     this.$inertia.post('/users',this.form)
        // }
    }
};
</script>
