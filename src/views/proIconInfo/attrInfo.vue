<template>
	<h2 class='title'>Icon 集</h2>
  <pro-row justify="start">
    <pro-card shadow="hover" :body-style="{ textAlign: 'center',height:'8rem',width:'8rem',paddingLeft:'0',paddingRight:'0' }" v-for="icon in icons">
      <pro-row class="row-bg iconBox" align="middle" justify="center">
        <pro-icon :icon="icon" :size="25"/>
        <div class="marginTop10">{{icon}}</div>
      </pro-row>
    </pro-card>
  </pro-row>
  <h2 class='title'>Icon 属性</h2>
	<pro-table :data="iconAttrData" border style="width: 100%">
		<pro-table-column prop="attrName" label="属性名" width="180" />
		<pro-table-column prop="attrInfo" label="说明" />
		<pro-table-column prop="attrType" label="类型" width="150" />
		<pro-table-column prop="attrDefault" label="默认值" width="150" />
	</pro-table>
</template>
<script setup lang="ts">

const icons=[
  "Plus","Minus","CirclePlus","Search","Female","Male","Aim","House","FullScreen","Loading","Link",
  "Service","Pointer","Star","Notification","Connection","ChatDotRound","Setting","Clock","Position",
  "Discount","Odometer","ChatSquare","ChatRound","ChatLineRound","ChatLineSquare","ChatDotSquare","View",
  "Hide","Unlock","Lock","RefreshRight","RefreshLeft","Refresh","Bell","MuteNotification","User","Check",
  "CircleCheck","Warning","CircleClose","Close","PieChart","More","Compass","Filter","Switch","Select",
  "SemiSelect","CloseBold","EditPen","Edit","Message","MessageBox","TurnOff","Finished","Delete","Crop",
  "SwitchButton","Operation","Open","Remove","ZoomOut","ZoomIn","InfoFilled","CircleCheckFilled","SuccessFilled",
  "WarningFilled","CircleCloseFilled","QuestionFilled","WarnTriangleFilled","UserFilled","MoreFilled","Tools",
  "HomeFilled","Menu","UploadFilled","Avatar","HelpFilled","Share","StarFilled","Comment","Histogram","Grid",
  "Promotion","DeleteFilled","RemoveFilled","CirclePlusFilled","ArrowLeft","ArrowUp","ArrowRight","ArrowDown",
  "ArrowLeftBold","ArrowUpBold","ArrowRightBold","ArrowDownBold","DArrowRight","DArrowLeft","Download","Upload",
  "Top","Bottom","Back","Right","TopRight","TopLeft","BottomRight","BottomLeft","Sort","SortUp","SortDown","Rank",
  "CaretLeft","CaretTop","CaretRight","CaretBottom","DCaret","Expand","Fold","DocumentAdd","Document","Notebook",
  "Tickets","Memo","Collection","Postcard","ScaleToOriginal","SetUp","DocumentDelete","DocumentChecked","DataBoard",
  "DataAnalysis","CopyDocument","FolderChecked","Files","Folder","FolderDelete","FolderRemove","FolderOpened",
  "DocumentCopy","DocumentRemove","FolderAdd","FirstAidKit","Reading","DataLine","Management","Checked","Ticket",
  "Failed","TrendCharts","List","Microphone","Mute","Mic","VideoPause","VideoCamera","VideoPlay","Headset",
  "Monitor","Film","Camera","Picture","PictureRounded","Iphone","Cellphone","VideoCameraFilled","PictureFilled",
  "Platform","CameraFilled","BellFilled","Location","LocationInformation","DeleteLocation","Coordinate","Bicycle",
  "OfficeBuilding","School","Guide","AddLocation","MapLocation","Place","LocationFilled","Van","Watermelon","Pear",
  "NoSmoking","Smoking","Mug","GobletSquareFull","GobletFull","KnifeFork","Sugar","Bowl","MilkTea","Lollipop",
  "Coffee","Chicken","Dish","IceTea","ColdDrink","CoffeeCup","DishDot","IceDrink","IceCream","Dessert",
  "IceCreamSquare","ForkSpoon","IceCreamRound","Food","HotWater","Grape","Fries","Apple","Burger","Goblet",
  "GobletSquare","Orange","Cherry","Printer","Calendar","CreditCard","Box","Money","Refrigerator","Cpu",
  "Football","Brush","Suitcase","SuitcaseLine","Umbrella","AlarmClock","Medal","GoldMedal","Present",
  "Mouse","Watch","QuartzWatch","Magnet","Help","Soccer","ToiletPaper","ReadingLamp","Paperclip","MagicStick",
  "Basketball","Baseball","Coin","Goods","Sell","SoldOut","Key","ShoppingCart","ShoppingCartFull","ShoppingTrolley",
  "Phone","Scissor","Handbag","ShoppingBag","Trophy","TrophyBase","Stopwatch","Timer","CollectionTag","TakeawayBox",
  "PriceTag","Wallet","Opportunity","PhoneFilled","WalletFilled","GoodsFilled","Flag","BrushFilled","Briefcase",
  "Stamp","Sunrise","Sunny","Ship","MostlyCloudy","PartlyCloudy","Sunset","Drizzling","Pouring","Cloudy","Moon",
  "MoonNight","Lightning","ChromeFilled","Eleme","ElemeFilled","ElementPlus","Shop","SwitchFilled","WindPower"
]

const iconAttrData = [
  {
    attrName: 'icon',
    attrInfo: '图标名称',
    attrType: 'string',
    attrDefault:''
  },
  {
    attrName: 'color',
    attrInfo: 'svg 的 fill 颜色',
    attrType: 'string',
    attrDefault:'继承颜色继承颜色'
  },
  {
    attrName: 'size',
    attrInfo: 'SVG 图标的大小，size x size',
    attrType: 'number/string',
    attrDefault:'继承字体大小'
  }
]

</script>

<style lang="scss" scoped>
.marginTop10 {
  margin-top: 10px;
  width: 100%;
}
.iconBox{
  width: 100%;
  height: 100%;
}
</style>