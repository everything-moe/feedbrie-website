<template>
  <q-page class="q-pa-md">
    <div class="col-auto">
      <div class="row items-center justify-around">
        <div class="4">
          <img
            alt="Brie and MsBobber Image"
            src="~assets/PopBrieEpic.png"
            width="450px"
          />
        </div>
      </div>
    </div>
    <div class="column items-center">
      <div class="row text-h4 q-py-lg">Objective</div>
      <p>
        Brie is our class pet mouse. She needs to be taken care of and loved!
        It’s your job to make sure she’s fed and is as happy as can be.
      </p>
      <div class="col-4">
        <q-list bordered separator>
          <q-item>
            <q-item-section>
              <q-item-label class="text-h6">
                Leaderboard
              </q-item-label>
            </q-item-section>
          </q-item>
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

      <div class="row text-h4 q-py-lg">How to Play</div>
      <div class="row justify-center">
        <p>
          This is text based game that's played in chat, when Bobber is offline.
        </p>
        <p>
          The currency used to play is called Student Points (SP). These points
          can be earned in a multitude of ways. One way to earn points is by
          attending class (tuning into the livestream) on time before it reaches
          the 10 minute mark.
        </p>
        <p>
          Another way many students get SP is by creating drawings, gifs,
          videos, music, etc which is stream related. These should be submitted
          in the class Discord and will eventually be shown on stream, after
          which the student will receive points!
        </p>
        <p>
          To begin playing, enter any command to get Brie’s attention! You can
          use SP earned from class to purchase food for Brie. Cheese will always
          be in stock year round, but other foods are seasonal. Make sure to buy
          the right food at the right time.
        </p>
        <p>
          Brie will automatically eat any food purchased and increase her
          affection (and sometimes her bond) with you. If you have no SP to
          spend, you can feed her a cracker a day which is free of charge but
          offer the lowest stat boost.
        </p>
        <p>
          Your affection level with Brie will help towards completing Bond
          Activities with her! Bond Activities will affect your bond level with
          Brie, and increase how much she loves you!
        </p>
        <p>
          Everyone's bond level contributes to Brie's total happiness, and once
          her happiness rank reaches certain levels, some special events may
          occur...
        </p>
      </div>
      <div class="column text-h4 items-center">Commands</div>
      <div class="row justify-center q-py-lg">
        <div class="column items-center">
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
      </div>
      <div class="row justify-center">
        <div class="row q-pb-lg">
          <div class="column items-center">
            <div class="text-h5">Items</div>
            <div class="row">
              <p class="q-px-lg">Buy items to unlock more bonding activities</p>
            </div>
            <div class="row">
              <q-list bordered separator>
                <div v-for="availableItem in store.items" :key="availableItem">
                  <q-item clickable>
                    <q-item-section>
                      <q-item-label>
                        {{ Object.keys(availableItem).toString() }}
                      </q-item-label>
                      <q-item-label caption>
                        Cost:
                        {{ availableItem[Object.keys(availableItem)].cost }}
                        points
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                </div>
              </q-list>
            </div>
          </div>

          <div class="column items-center">
            <div class="text-h5">Gifts</div>
            <div class="row">
              <div class="column items-center">
                <p class="q-px-lg">
                  Give Brie gifts!
                </p>
                <p>These contribute towards your affection with Brie</p>
              </div>
            </div>
            <div class="row">
              <q-list bordered separator>
                <div v-for="availableGift in store.gifts" :key="availableGift">
                  <q-item clickable>
                    <q-item-section>
                      <q-item-label>
                        {{ Object.keys(availableGift).toString() }}
                      </q-item-label>
                      <q-item-label caption>
                        Cost:
                        {{ availableGift[Object.keys(availableGift)].cost }}
                        points
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                </div>
              </q-list>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="row">
            <div class="column items-center">
              <div class="row text-h5">Bonding</div>
              <div class="row">
                <div class="column items-center">
                  <p class="q-px-lg">
                    Various bonding activities that you can do with Brie
                  </p>
                  <p>these will contribute to your bond level</p>
                </div>
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

            <div class="column items-center">
              <div class="text-h5">Foods</div>
              <div class="row">
                <div class="column items-center">
                  <p class="q-px-lg">
                    Treats purchased will contribute to Brie's affection with
                    you.
                  </p>
                  <p>Current foods in season:</p>
                </div>
              </div>
              <div class="row">
                <q-list bordered separator>
                  <div
                    v-for="availableFood in store.foods"
                    :key="availableFood"
                  >
                    <q-item clickable>
                      <q-item-section>
                        <q-item-label>
                          {{ Object.keys(availableFood).toString() }}
                        </q-item-label>
                        <q-item-label caption>
                          Cost:
                          {{ availableFood[Object.keys(availableFood)].cost }}
                          points
                        </q-item-label>
                      </q-item-section>
                    </q-item>
                  </div>
                </q-list>
              </div>
            </div>
          </div>
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
          name: "gift <gift>",
          description: "Give Brie a gift"
        },
        {
          name: "feed <food>",
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
    let mapAndSortByProp = (obj, prop) => {
      return Object.entries(obj)
        .map(e => ({ [e[0]]: e[1] }))
        .sort((a, b) => a[Object.keys(a)][prop] - b[Object.keys(b)][prop]);
    };
    this.$axios
      .get(`https://feedbrie-api.aws.everything.moe/v1/store`)
      .then(res => {
        let data = res.data;
        let _store = {
          foods: mapAndSortByProp(data["foods"], "cost"),
          items: mapAndSortByProp(data["items"], "cost"),
          gifts: mapAndSortByProp(data["gifts"], "cost")
        };
        this.store = _store;
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
