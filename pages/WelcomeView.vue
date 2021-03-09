<template>
  <div class="Heiti">
    <div class="row">
      <div class="col ma-md-10 topbanner" :class="{ 'col-8': modeDesktop }" >
        <!-- BANNER TOP -->
        <v-card class="cardbanner mt-md-10 cardheight"
                style="box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px 0px rgba(0, 0, 0, 0);
                       border-radius: 30px;"
        >
          <div class="row">
            <div class="col">
              <div class="mt-md-8">
                <v-list-item-title class="headline d-flex justify-center">
                  <span class="Heiti fs25">Welcome back {{staff.display_name}}!</span>
                </v-list-item-title>
                <div class="mt-md-3">
                  <p class="Heiti fs14" align="center" style="color: #768f9c">
                    "Lorem Ipsum is simply dummy text of the printing and <br> typesetting industry. Lorem Ipsum has been the industry's"
                  </p>
                </div>
              </div>
            </div>
            <div class="col-5">
              <v-img
              width=300
              class="imgbanner"
              style=""
              src="../assets/img/user-illustration.png"
            ></v-img>
            </div>
          </div>
        </v-card>
        <!-- Transaction -->
        <div class="row mt-md-8 ctr">
          <div class="col">
            <span class="titletransaksi">Last Transfer</span>
            <span class="numbertransaksi"> Rp. 10.000.000.000</span>
          </div>
          <div class="col">
            <span class="titletransaksi">Total Customers</span>
            <span class="numbertransaksi"> 5347</span>
          </div>
          <div class="col">
            <span class="titletransaksi">Total Volume</span>
            <span class="numbertransaksi"> Rp. 99.000.000.000.000</span>
          </div>
        </div>
        <!-- CHART -->
        <div class="row mt-md-8">
              <div class="row">
                <div class="col mt-5">
                  <span class="titletransaksi pl-5">Sales Summary</span>
                </div>
                <div class="col pl-16" style="margin-left:20px;">
                   <v-tabs v-model="tabs">
                      <v-tab>This Week</v-tab>
                      <v-tab>This Month</v-tab>
                      <v-tab>This Year</v-tab>
                    </v-tabs>
                </div>
              </div>
            <div class="col">
              <line-chart class="pt-3"></line-chart>
          </div>
        </div>
        <!-- CARD SUMMARY -->
        <div class="row">
          <div class="col-lg-12">
          <div class="row pt-10">
            <div class="col-lg-6" style="margin-left: -10px;">
              <v-card
                class="mx-auto card-style"
                outlined
                style="border-radius:30px;
                       border-color: #8DC53F;"
              >
                <v-list-item three-line style="padding-top: 10px; margin-left: 5px;">
                  <v-list-item-content>
                    <v-list-item-title style="color:#333333;">
                      Transaction
                    </v-list-item-title>
                    <v-list-item-subtitle>This Year</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <div style="padding:20px;">
                  <h2 class="headline mb-1 d-flex justify-end" style="margin-top:-10px; padding-right: 10px;">112.219.224</h2>
                </div>
              </v-card>
            </div>
            <div class="col-lg-6" style="margin-left: 10px;">
              <v-card
                class="mx-auto"
                outlined
                style="border-radius:30px;
                       border-color: #8DC53F;"
              >
                <v-list-item three-line style="padding-top: 10px; margin-left: 5px;">
                  <v-list-item-content>
                    <v-list-item-title style="color:#333333;">
                      Item Sold
                    </v-list-item-title>
                    <v-list-item-subtitle>This Year</v-list-item-subtitle>
                  </v-list-item-content>
                  <h2 style="padding-right:15px;" class="headline mb-1">
                    Qty
                  </h2>
                </v-list-item>
                <div style="padding:20px;">
                  <h2 class="headline mb-1 d-flex justify-end" style="margin-top:-10px; padding-right: 10px;">112.219.224</h2>
                </div>
              </v-card>
            </div>
          </div>
          </div>
          <div class="row">
            <div class="col-lg-12 pr-5">
              <v-card
                class="mx-auto"
                outlined
                style="border-radius:30px;
                       border-color: #8DC53F;"
              >
                <v-list-item three-line style="padding-top: 10px; margin-left: 5px;">
                  <v-list-item-content>
                    <v-list-item-title style="color:#333333;">
                      <div style="font-size: 14px;">
                        Total Order
                      </div>
                    </v-list-item-title>
                    <v-list-item-subtitle>
                      <div style="font-size: 14px;">
                        This Year
                      </div>
                    </v-list-item-subtitle>
                  </v-list-item-content>
                  <h2 style="padding-right:20px;" class="headline mb-1">
                    Rp
                  </h2>
                </v-list-item>
                <div style="padding:20px;">
                  <h2 class="headline mb-1 d-flex justify-end" style="margin-top:-10px; padding-right: 15px; font-size: 25px;">112.219.22423124214.24</h2>
                </div>
              </v-card>
            </div>
          </div>
        </div>

        <!-- TABLE -->
        <div class="row">
            <div class="col pt-16" style="padding: 0px;">
              <div class="title-table">
                <label class="label-title">
                  Top Product
                </label>
              </div>
              <v-data-table
                :headers="headers"
                :items="desserts"
                :items-per-page="5"
              ></v-data-table>
            </div>
          </div>
      </div>

      <!-- RIGHT NAVBAR -->
      <div class="col-3" v-if="modeDesktop">
          <v-navigation-drawer
            fixed
            permanent
            right
            v-if="modeDesktop"
            style="margin-top:64px;width:300px"
          >
            <v-card style="box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px 0px rgba(0, 0, 0, 0);
                           border-radius: 30px;">
              <div class="d-flex justify-center mt-md-10">
                <button @click="edit()">
                    <v-badge
                    bottom
                    overlap
                    offset-x="35"
                    offset-y="25"
                    color="white"
                    icon="mdi-pencil"
                    >
                        <v-avatar size="100">
                            <img alt="user" src="../assets/img/avatar.png" />
                        </v-avatar>
                    </v-badge>
                  </button>
              </div>
              <div class="d-flex justify-center fs18 mt-4">{{staff.display_name}}</div>
              <div class="d-flex justify-center email-link">{{staff.user.email}}</div>
              <!-- <div class="d-flex justify-center fs18 mt-4">Rizky Putra Junior</div>
              <div class="d-flex justify-center email-link">junior@edenfarm.id</div> -->
              <div class="row my-md-1">
                <div class="col ctr">
                  <label class="fs13" style="color: #768f9c;">Frontend Dev</label>
                </div>
                <div class="col">
                  <label style="color: #768f9c; font-size: 13px;">
                    <v-icon medium color="#768f9c darken-2" style="font-size:12px;"> mdi-phone-in-talk </v-icon> 
                    +62 813 8044 3523
                  </label>
                </div>
              </div>
              <v-card-text style="margin-left:-10px;">
                <div style="font-size:18px;" class="font-weight-bold ml-8 mb-2">Activites</div>
                <v-timeline align-top dense>
                  <v-timeline-item
                    v-for="message in messages"
                    :key="message.time"
                    :color="message.color"
                    small
                    fill-dot
                  >
                    <div>
                      <div class="font-weight-normal">
                        <div style="font-color: #768F9C;">{{ message.activity }}</div>
                      </div>
                      <div style="font-size: 12px;">{{ message.time }}</div>
                    </div>
                  </v-timeline-item>
                </v-timeline>
              </v-card-text>
            </v-card>
          </v-navigation-drawer>
      </div>
    </div>
  </div>
</template>
<style>
.cardbanner {
  background: linear-gradient(180deg, rgba(241, 251, 226, 0) 0%, #E0F0CC 100%);
}
.titlebanner {
  color: linear-gradient(125.18deg, #8DC53F 0%, #4ABFB2 101.47%);
}
@media (min-width: 400px) {
    .imgbanner {
      top: -80px;
      position: absolute;
    }
    .cardheight {
      height:175px;
    }
}
@media (max-width: 960px) {
    .topbanner {
      margin-top:60px ;
    }
}
.titletransaksi {
  color: #768F9C; 
  font-size: 14px;
}
.numbertransaksi {
  color: #FC7079; 
  font-size: 14px;
}
.ctr {
  text-align:center;
}
.bordercard {
  border: 1px solid;
border-image-source: linear-gradient(125.18deg, #8DC53F 0%, #4ABFB2 101.47%);
}
</style>

<script>
import axios from "axios";
import TrendChart from "vue-trend-chart";
import LineChart from "../components/LineChart.vue";
export default {
  components: { axios, TrendChart, LineChart },
  name: "Home",
  data() {
    return {
      tabs: null,
      modeDesktop : null,
      headers: [
        {
          text: 'Item Name',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Category', value: 'calories' },
        { text: 'Area', value: 'fat' },
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
        },
      ],

      messages: [
        {
          activity: "Create Sales Order",
          time: "12/11/2020 17:29:38",
          color: "#768F9C",
        },
        {
          activity: "Update User Permission",
          time: "12/11/2020 17:29:39",
          color: "#768F9C",
        },
        {
          activity: "Create Sales Order",
          time: "12/11/2020 17:29:40",
          color: "#768F9C",
        },
        {
          activity: "Update User Permission",
          time: "12/11/2020 17:29:41",
          color: "#768F9C",
        },
      ],
    };
  },
  methods: {
    edit() {
      this.$router.push('/user/user/edit');
    },
    // ini fungsi untuk download report
    // downloads() {
    //     this.$http.get("/report/goods-receipt-item?export=1").then(response => {
    //       axios({
    //           url: response.data.file,
    //           method: 'GET',
    //           responseType: 'blob',
    //       }).then((responses) => {
    //           console.log('jancok')
    //           var fileURL = window.URL.createObjectURL(new Blob([responses.data]));
    //           var fileLink = document.createElement('a');

    //           fileLink.href = fileURL;
    //           fileLink.setAttribute('download', 'testing.xlsx');
    //           document.body.appendChild(fileLink);

    //           fileLink.click();
    //       });
    //       console.log(response.data.file,'awww')
    //   });
    // }
  },
  mounted() {
    window.onresize = () => {
        if (window.screen.width > 1024) {
            this.modeDesktop = true
        } else {
            this.modeDesktop = false
        }
    }
  },
  created () {
      if (window.screen.width > 1024) {
          this.modeDesktop = true
      } else {
          this.modeDesktop = false
      }
  },
  computed: {
    staff () {
      return this.$store.getters.getStaff
    }
  },

};
</script>
