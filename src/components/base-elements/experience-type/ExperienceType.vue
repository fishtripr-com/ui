<template functionnal>
  <div class="experience-type_container">

    <div class="experience-type">
        <span>
            <i :class="classType">{{ offer.toUpperCase() }}</i> &bull; {{ country.toUpperCase() }}
        </span>
    </div>

  </div>
</template>

<script>

export default {
  name: "experience-type",
  props: {
    classType: { type: String, default: "" },
    offer: { type: String, default: "Host" },
    country: { type: String, default: "Belgium" }
  }
};
</script>

<style lang="scss" scoped>
@import '../../../assets/style/index';

.experience-type_container {
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        padding: $space-m;
        text-align: left;
        font-size:$font-size-xs;
        font-weight: $semibold;
        color: $color-text-light;

            .experience-type {
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


 



