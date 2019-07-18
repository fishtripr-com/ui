<template functionnal>
  <div class="partner-type_container">

    <div class="partner-type">
        <span>
            <i :class="classType">{{ partner }}</i> | {{ country }}
        </span>
    </div>

  </div>
</template>

<script>

export default {
  name: "partner-type",
  props: {
    classType: { type: String, default: "" },
    partner: { type: String, default: "" },
    country: { type: String, default: "" }
  }
};
</script>

<style lang="scss" scoped>
@import '../../../assets/style/index';

.partner-type_container {
        display: flex;
        flex-wrap: wrap;
        font-size:$font-size-s;
        color: $color-text-dark;

            .partner-type {
            display: flex;
            }

                .guide_hosting {
                    color: $tag-guideNHost;
                }

                .guide {
                    color: $tag-guide;
                }

                .hosting {
                    color: $tag-host;
                }

                .fishery {
                    color: $tag-fishery;
                }

                .outfitter {
                    color: #56D2AB;
                }
}
</style>


 




 



