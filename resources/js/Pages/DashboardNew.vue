<template>
    <app-layout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Welcome to Your New Dashboard
            </h2>
        </template>
        <!--Dashboard content-->
        <!-- <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <GmapMap
                    ref="mapRef"
                    :center="{ lat: 35.669261707163976, lng:139.75767413949504 }"
                    :zoom="8"
                    map-type-id="terrain"
                    style="width: 100%; height: 600px"
                >
                <Gmapmarker
                    :key="index"
                    v-for="(m, index) in markers"
                    :position="m.position"
                    :clickable="true"
                    :draggable="true"
                    @click="center = m.position"
                />
                </GmapMap>
            </div>
        </div> -->
        <div class="columns is-variable is-0">
            <div class="menu-container px-1 has-background-white">
                <div class="menu-wrapper">
                    <aside class="menu">
                        <p class="menu-label">General</p>
                        <ul class="menu-list">
                            <li><a><i class="fas fa-tachometer-alt icon"></i>Dashboard</a></li>
                            <li><a>Profile</a></li>
                        </ul>
                        <p class="menu-label">Administration</p>
                         <ul class="menu-list">
                            <li><a>Team Settings</a></li>
                            <li>
                            <a class="is-active has-background-primary">Manage Your Team</a>
                            <ul>
                                <li><a>Members</a></li>
                                <li><a>Plugins</a></li>
                                <li><a>Add a member</a></li>
                            </ul>
                            </li>
                         </ul>
                        <p class="menu-label">Transactions</p>
                        <ul class="menu-list">
                            <li><a>Payments</a></li>
                            <li><a>Transfers</a></li>
                            <li><a>Balance</a></li>
                        </ul>
                    </aside>
                </div>
            </div>
        </div>
    </app-layout>
</template>
<script>
    import AppLayout from '@/Layouts/AppLayout';

    export default {
        name: "GoogleMap",
        data() {
            return {
                markers: []
            }
        },
        components: {
            AppLayout
        },
    }
</script>
