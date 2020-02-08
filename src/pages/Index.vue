<template>
  <q-page class="q-pa-md">
    <div class="column">
      <div class="row items-center">
        <div class="column">
          <img
            alt="Brie and MsBobber Image"
            src="~assets/brie_and_ms_bobber.png"
            width="250px"
          />
        </div>
        <div class="column">
          <q-list bordered separator>
            <div v-for="user in leaderBoard" :key="user">
              <q-item clickable>
                <q-item-section>
                  <q-item-label>
                    # {{ leaderBoard.indexOf(user) + 1 }} -> {{ user.username }}
                  </q-item-label>
                </q-item-section>
              </q-item>
            </div>
          </q-list>
        </div>
      </div>
    </div>
    <div class="column">
      <div class="row text-h4 q-py-lg">Objective</div>
      <div>
        Brie is our class pet mouse. She needs to be taken care of and loved!
        It’s your job to make sure she’s fed and is as happy as can be.
      </div>
      <div class="row text-h4 q-py-lg">How to Play</div>
      <p>
        This is text based game that's played in chat, when Bobber is offline.
      </p>
      <p>
        The currency used to play is called Student Points (SP). These points
        can be earned in a multitude of ways. One way to earn points is by
        attending class (tuning into the livestream) on time before it reaches
        the 10 minute mark. Another way many students get SP is by creating
        drawings, gifs, videos, music, etc which is stream related. These should
        be submitted in the class Discord and will eventually be shown on
        stream, after which the student will receive points!
      </p>
      <p>
        To begin playing, enter any command to get Brie’s attention! You can use
        SP earned from class to purchase food for Brie. Cheese will always be in
        stock year round, but other foods are seasonal. Make sure to buy the
        right food at the right time. Brie will automatically eat any food
        purchased and increase her affection (and sometimes her bond) with you.
        If you have no SP to spend, you can feed her a cracker a day which is
        free of charge but offer the lowest stat boost.
      </p>
      <p>
        Your affection level with Brie will help towards completing Bond
        Activities with her! Bond Activities will affect your bond level with
        Brie, and increase how much she loves you! Everyone's bond level
        contributes to Brie's total happiness, and once her happiness rank
        reaches certain levels, some special events may occur...
      </p>

      <div class="column text-h4 q-py-lg">Commands</div>
      <div class="column q-py-lg">
        <div class="row text-h5">General</div>
        <div class="row">
          <q-list bordered separator>
            <div
              v-for="generalCommand in generalCommands"
              :key="generalCommand"
            >
              <q-item clickable>
                <q-item-section>
                  <q-item-label>
                    {{ commandPrefix + generalCommand.name }}
                  </q-item-label>
                  <q-item-label caption>
                    {{ generalCommand.description }}
                  </q-item-label>
                </q-item-section>
              </q-item>
            </div>
          </q-list>
        </div>
      </div>

      <div class="column q-py-lg">
        <div class="text-h4">Items</div>
        <div class="row">
          <p>Buy items to unlock more bonding activities</p>
        </div>
        <div class="row">
          <q-list bordered separator>
            <div v-for="availableItem in store.items" :key="availableItem">
              <q-item clickable>
                <q-item-section>
                  <q-item-label>
                    {{ commandPrefix + "buy " + Object.keys(availableItem) }}
                  </q-item-label>
                  <q-item-label caption>
                    Cost:
                    {{ availableItem[Object.keys(availableItem)].cost }} points
                  </q-item-label>
                </q-item-section>
              </q-item>
            </div>
          </q-list>
        </div>
      </div>

      <div class="column q-py-lg">
        <div class="text-h5">Gifts</div>
        <div class="row">
          <p>
            Give Brie gifts! These contribute towards your affection with Brie
          </p>
        </div>
        <div class="row">
          <q-list bordered separator>
            <div v-for="availableGift in store.gifts" :key="availableGift">
              <q-item clickable>
                <q-item-section>
                  <q-item-label>
                    {{ commandPrefix + "gift " + Object.keys(availableGift) }}
                  </q-item-label>
                  <q-item-label caption>
                    Cost:
                    {{ availableGift[Object.keys(availableGift)].cost }} points
                  </q-item-label>
                </q-item-section>
              </q-item>
            </div>
          </q-list>
        </div>
      </div>

      <div class="column q-py-lg">
        <div class="row text-h5">Bonding</div>
        <div class="row">
          <p>
            Various bonding activities that you can do with Brie, these will
            contribute to your bond level
          </p>
        </div>
        <div class="row">
          <q-list bordered separator>
            <div
              v-for="bondingCommand in bondingCommands"
              :key="bondingCommand"
            >
              <q-item clickable>
                <q-item-section>
                  <q-item-label>
                    {{ commandPrefix + bondingCommand.name }}
                  </q-item-label>
                  <q-item-label caption>
                    {{ bondingCommand.description }}
                  </q-item-label>
                </q-item-section>
              </q-item>
            </div>
          </q-list>
        </div>
      </div>

      <div class="column q-py-lg">
        <div class="text-h5">Foods</div>
        <div class="row">
          <p>
            Treats purchased will contribute to Brie's affection with you.
            Current foods in season:
          </p>
        </div>
        <div class="row">
          <q-list bordered separator>
            <div v-for="availableFood in store.foods" :key="availableFood">
              <q-item clickable>
                <q-item-section>
                  <q-item-label>
                    {{ commandPrefix + "feed " + Object.keys(availableFood) }}
                  </q-item-label>
                  <q-item-label caption>
                    Cost:
                    {{ availableFood[Object.keys(availableFood)].cost }} points
                  </q-item-label>
                </q-item-section>
              </q-item>
            </div>
          </q-list>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",
  data() {
    return {
      commandPrefix: "!",
      generalCommands: [
        {
          name: "help",
          description: "Show help"
        },
        {
          name: "buy <item>",
          description:
            "Buy items from the giftshop (you need these for certain bonding activities!)"
        },
        {
          name: "gift",
          description: "Give Brie a gift"
        },
        {
          name: "feed",
          description: "Feed Brie tasty treats, scroll down to see a list"
        },
        {
          name: "topbonds",
          description: "Shows the bond leaderboard"
        },
        {
          name: "stats",
          description: "Shows your stats"
        }
      ],
      bondingCommands: [
        {
          name: "headpat",
          description: ""
        },
        {
          name: "scratch",
          description: ""
        },
        {
          name: "hug",
          description: ""
        },
        {
          name: "tickle",
          description: ""
        },
        {
          name: "nuzzle",
          description: ""
        },
        {
          name: "brush",
          description: ""
        },
        {
          name: "massage",
          description: ""
        },
        {
          name: "bellyrub",
          description: ""
        },
        {
          name: "cuddle",
          description: ""
        },
        {
          name: "holdhands",
          description: ""
        }
      ],
      store: [],
      leaderBoard: []
    };
  },
  mounted() {
    this.$axios
      .get(`https://feedbrie-api.aws.everything.moe/v1/store`)
      .then(res => {
        this.store = res.data;
      })
      .catch(err => {
        this.$q.notify({
          color: "negative",
          position: "center",
          message: `Failed to load store info: ${err}`,
          icon: "report_problem"
        });
      });
    this.$axios
      .get("https://feedbrie-api.aws.everything.moe/v1/leaderboard")
      .then(res => {
        this.leaderBoard = res.data;
      })
      .catch(err => {
        this.$q.notify({
          color: "negative",
          position: "center",
          message: `Failed to load Leaderboard: ${err}`,
          icon: "report_problem"
        });
      });
  }
};
</script>
