// import blank   from "./blank.yaml"
// import shopify from "./15-shopify.yaml"
// import blank    from "./0-blank.yaml"
import blank from "./0-notinuse.yaml"
import comms    from "./1-comms.yaml"
import devtools from "./2-devtools.yaml"
import genai    from "./3-genai.yaml"
import devops   from "./4-devops.yaml"
import msft     from "./5-msft.yaml"
import amzn     from "./6-amzn.yaml"
import goog     from "./7-goog.yaml"
import apache   from "./8-apache.yaml"
import fintech  from "./9-fintech.yaml"
import banking  from "./10-banking.yaml"
import house    from "./11-house.yaml"
import cloud    from "./12-cloud.yaml"
import services from "./13-services.yaml"
import stream   from "./14-stream.yaml"


export default function pdata(ls) {
   let sdata = {}
   if (!ls.gs) {
      sdata.p1 = blank
      sdata.p2 = blank
      sdata.p3 = blank
      sdata.p4 = blank
      sdata.p5 = blank
      sdata.p6 = blank
      sdata.p7 = blank
      sdata.p8 = blank
   } else {
      // alternate
      switch (ls.gd) {
         case "test":
            sdata.p1 = blank
            sdata.p2 = blank
            sdata.p3 = blank
            sdata.p4 = blank
            sdata.p5 = blank
            sdata.p6 = blank
            sdata.p7 = blank
            sdata.p8 = blank
            break;

         case "personal":
            sdata.p1 = comms
            sdata.p2 = fintech
            sdata.p3 = banking
            sdata.p4 = house
            sdata.p5 = genai
            sdata.p6 = cloud
            sdata.p7 = services
            sdata.p8 = stream
            break

         default:
            sdata.p1 = blank
            sdata.p2 = blank
            sdata.p3 = blank
            sdata.p4 = blank
            sdata.p5 = blank
            sdata.p6 = blank
            sdata.p7 = blank
            sdata.p8 = blank

      }
   }
   return sdata
}
