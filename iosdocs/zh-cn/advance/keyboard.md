---
title: 键盘输入码表
description: EasyClick 自动化脚本 iOS免越狱 键盘输入码表
keywords: [ EasyClick 自动化脚本 iOS免越狱 键盘输入码表 ]
---

### 说明

这个都是模拟键盘输入的，参数分为 eventPageID 和 eventUsageID。两个参数没具体什么意思别问，用就可以了。

### 快捷键模拟

eventPageID = 0x0C

```
onsumer Page (0x0C) */
/* All controls on the Consumer page are application-specific. That is, they affect a specific device, not the system as a whole. */
```

eventUsageID = 以下是从源码中复制，具体什么情况需要自己试试

```js showLineNumbers
kHIDUsage_Csmr_ConsumerControl = 0x01,	/* Application Collection */
kHIDUsage_Csmr_NumericKeyPad = 0x02,	/* Named Array */
kHIDUsage_Csmr_ProgrammableButtons = 0x03,	/* Named Array */
/* 0x03 - 0x1F Reserved */
kHIDUsage_Csmr_Plus10 = 0x20,	/* One-Shot Control */
kHIDUsage_Csmr_Plus100 = 0x21,	/* One-Shot Control */
kHIDUsage_Csmr_AMOrPM = 0x22,	/* One-Shot Control */
/* 0x23 - 0x3F Reserved */
kHIDUsage_Csmr_Power = 0x30,	/* On/Off Control */
kHIDUsage_Csmr_Reset = 0x31,	/* One-Shot Control */
kHIDUsage_Csmr_Sleep = 0x32,	/* One-Shot Control */
kHIDUsage_Csmr_SleepAfter = 0x33,	/* One-Shot Control */
kHIDUsage_Csmr_SleepMode = 0x34,	/* Re-Trigger Control */
kHIDUsage_Csmr_Illumination = 0x35,	/* On/Off Control */
kHIDUsage_Csmr_FunctionButtons = 0x36,	/* Named Array */
/* 0x37 - 0x3F Reserved */
kHIDUsage_Csmr_Menu = 0x40,	/* On/Off Control */
kHIDUsage_Csmr_MenuPick = 0x41,	/* One-Shot Control */
kHIDUsage_Csmr_MenuUp = 0x42,	/* One-Shot Control */
kHIDUsage_Csmr_MenuDown = 0x43,	/* One-Shot Control */
kHIDUsage_Csmr_MenuLeft = 0x44,	/* One-Shot Control */
kHIDUsage_Csmr_MenuRight = 0x45,	/* One-Shot Control */
kHIDUsage_Csmr_MenuEscape = 0x46,	/* One-Shot Control */
kHIDUsage_Csmr_MenuValueIncrease = 0x47,	/* One-Shot Control */
kHIDUsage_Csmr_MenuValueDecrease = 0x48,	/* One-Shot Control */
/* 0x49 - 0x5F Reserved */
kHIDUsage_Csmr_DataOnScreen = 0x60,	/* On/Off Control */
kHIDUsage_Csmr_ClosedCaption = 0x61,	/* On/Off Control */
kHIDUsage_Csmr_ClosedCaptionSelect = 0x62,	/* Selector */
kHIDUsage_Csmr_VCROrTV = 0x63,	/* On/Off Control */
kHIDUsage_Csmr_BroadcastMode = 0x64,	/* One-Shot Control */
kHIDUsage_Csmr_Snapshot = 0x65,	/* One-Shot Control */
kHIDUsage_Csmr_Still = 0x66,	/* One-Shot Control */
/* 0x67 - 0x7F Reserved */
kHIDUsage_Csmr_Selection = 0x80,	/* Named Array */
kHIDUsage_Csmr_Assign = 0x81,	/* Selector */
kHIDUsage_Csmr_ModeStep = 0x82,	/* One-Shot Control */
kHIDUsage_Csmr_RecallLast = 0x83,	/* One-Shot Control */
kHIDUsage_Csmr_EnterChannel = 0x84,	/* One-Shot Control */
kHIDUsage_Csmr_OrderMovie = 0x85,	/* One-Shot Control */
kHIDUsage_Csmr_Channel = 0x86,	/* Linear Control */
kHIDUsage_Csmr_MediaSelection = 0x87,	/* Selector */
kHIDUsage_Csmr_MediaSelectComputer = 0x88,	/* Selector */
kHIDUsage_Csmr_MediaSelectTV = 0x89,	/* Selector */
kHIDUsage_Csmr_MediaSelectWWW = 0x8A,	/* Selector */
kHIDUsage_Csmr_MediaSelectDVD = 0x8B,	/* Selector */
kHIDUsage_Csmr_MediaSelectTelephone = 0x8C,	/* Selector */
kHIDUsage_Csmr_MediaSelectProgramGuide = 0x8D,	/* Selector */
kHIDUsage_Csmr_MediaSelectVideoPhone = 0x8E,	/* Selector */
kHIDUsage_Csmr_MediaSelectGames = 0x8F,	/* Selector */
kHIDUsage_Csmr_MediaSelectMessages = 0x90,	/* Selector */
kHIDUsage_Csmr_MediaSelectCD = 0x91,	/* Selector */
kHIDUsage_Csmr_MediaSelectVCR = 0x92,	/* Selector */
kHIDUsage_Csmr_MediaSelectTuner = 0x93,	/* Selector */
kHIDUsage_Csmr_Quit = 0x94,	/* One-Shot Control */
kHIDUsage_Csmr_Help = 0x95,	/* On/Off Control */
kHIDUsage_Csmr_MediaSelectTape = 0x96,	/* Selector */
kHIDUsage_Csmr_MediaSelectCable = 0x97,	/* Selector */
kHIDUsage_Csmr_MediaSelectSatellite = 0x98,	/* Selector */
kHIDUsage_Csmr_MediaSelectSecurity = 0x99,	/* Selector */
kHIDUsage_Csmr_MediaSelectHome = 0x9A,	/* Selector */
kHIDUsage_Csmr_MediaSelectCall = 0x9B,	/* Selector */
kHIDUsage_Csmr_ChannelIncrement = 0x9C,	/* One-Shot Control */
kHIDUsage_Csmr_ChannelDecrement = 0x9D,	/* One-Shot Control */
kHIDUsage_Csmr_Media = 0x9E,	/* Selector */
/* 0x9F Reserved */
kHIDUsage_Csmr_VCRPlus = 0xA0,	/* One-Shot Control */
kHIDUsage_Csmr_Once = 0xA1,	/* One-Shot Control */
kHIDUsage_Csmr_Daily = 0xA2,	/* One-Shot Control */
kHIDUsage_Csmr_Weekly = 0xA3,	/* One-Shot Control */
kHIDUsage_Csmr_Monthly = 0xA4,	/* One-Shot Control */
/* 0xA5 - 0xAF Reserved */
kHIDUsage_Csmr_Play = 0xB0,	/* On/Off Control */
kHIDUsage_Csmr_Pause = 0xB1,	/* On/Off Control */
kHIDUsage_Csmr_Record = 0xB2,	/* On/Off Control */
kHIDUsage_Csmr_FastForward = 0xB3,	/* On/Off Control */
kHIDUsage_Csmr_Rewind = 0xB4,	/* On/Off Control */
kHIDUsage_Csmr_ScanNextTrack = 0xB5,	/* One-Shot Control */
kHIDUsage_Csmr_ScanPreviousTrack = 0xB6,	/* One-Shot Control */
kHIDUsage_Csmr_Stop = 0xB7,	/* One-Shot Control */
kHIDUsage_Csmr_Eject = 0xB8,	/* One-Shot Control */
kHIDUsage_Csmr_RandomPlay = 0xB9,	/* On/Off Control */
kHIDUsage_Csmr_SelectDisc = 0xBA,	/* Named Array */
kHIDUsage_Csmr_EnterDisc = 0xBB,	/* Momentary Control */
kHIDUsage_Csmr_Repeat = 0xBC,	/* One-Shot Control */
kHIDUsage_Csmr_Tracking = 0xBD,	/* Linear Control */
kHIDUsage_Csmr_TrackNormal = 0xBE,	/* One-Shot Control */
kHIDUsage_Csmr_SlowTracking = 0xBF,	/* Linear Control */
kHIDUsage_Csmr_FrameForward = 0xC0,	/* Re-Trigger Control */
kHIDUsage_Csmr_FrameBack = 0xC1,	/* Re-Trigger Control */
kHIDUsage_Csmr_Mark = 0xC2,	/* One-Shot Control */
kHIDUsage_Csmr_ClearMark = 0xC3,	/* One-Shot Control */
kHIDUsage_Csmr_RepeatFromMark = 0xC4,	/* On/Off Control */
kHIDUsage_Csmr_ReturnToMark = 0xC5,	/* One-Shot Control */
kHIDUsage_Csmr_SearchMarkForward = 0xC6,	/* One-Shot Control */
kHIDUsage_Csmr_SearchMarkBackwards = 0xC7,	/* One-Shot Control */
kHIDUsage_Csmr_CounterReset = 0xC8,	/* One-Shot Control */
kHIDUsage_Csmr_ShowCounter = 0xC9,	/* One-Shot Control */
kHIDUsage_Csmr_TrackingIncrement = 0xCA,	/* Re-Trigger Control */
kHIDUsage_Csmr_TrackingDecrement = 0xCB,	/* Re-Trigger Control */
kHIDUsage_Csmr_StopOrEject = 0xCC,	/* One-Shot Control */
kHIDUsage_Csmr_PlayOrPause = 0xCD,	/* One-Shot Control */
kHIDUsage_Csmr_PlayOrSkip = 0xCE,	/* One-Shot Control */
/* 0xCF - 0xDF Reserved */
kHIDUsage_Csmr_Volume = 0xE0,	/* Linear Control */
kHIDUsage_Csmr_Balance = 0xE1,	/* Linear Control */
kHIDUsage_Csmr_Mute = 0xE2,	/* On/Off Control */
kHIDUsage_Csmr_Bass = 0xE3,	/* Linear Control */
kHIDUsage_Csmr_Treble = 0xE4,	/* Linear Control */
kHIDUsage_Csmr_BassBoost = 0xE5,	/* On/Off Control */
kHIDUsage_Csmr_SurroundMode = 0xE6,	/* One-Shot Control */
kHIDUsage_Csmr_Loudness = 0xE7,	/* On/Off Control */
kHIDUsage_Csmr_MPX = 0xE8,	/* On/Off Control */
kHIDUsage_Csmr_VolumeIncrement = 0xE9,	/* Re-Trigger Control */
kHIDUsage_Csmr_VolumeDecrement = 0xEA,	/* Re-Trigger Control */
/* 0xEB - 0xEF Reserved */
kHIDUsage_Csmr_Speed = 0xF0,	/* Selector */
kHIDUsage_Csmr_PlaybackSpeed = 0xF1,	/* Named Array */
kHIDUsage_Csmr_StandardPlay = 0xF2,	/* Selector */
kHIDUsage_Csmr_LongPlay = 0xF3,	/* Selector */
kHIDUsage_Csmr_ExtendedPlay = 0xF4,	/* Selector */
kHIDUsage_Csmr_Slow = 0xF5,	/* One-Shot Control */
/* 0xF6 - 0xFF Reserved */
kHIDUsage_Csmr_FanEnable = 0x100,	/* On/Off Control */
kHIDUsage_Csmr_FanSpeed = 0x101,	/* Linear Control */
kHIDUsage_Csmr_LightEnable = 0x102,	/* On/Off Control */
kHIDUsage_Csmr_LightIlluminationLevel = 0x103,	/* Linear Control */
kHIDUsage_Csmr_ClimateControlEnable = 0x104,	/* On/Off Control */
kHIDUsage_Csmr_RoomTemperature = 0x105,	/* Linear Control */
kHIDUsage_Csmr_SecurityEnable = 0x106,	/* On/Off Control */
kHIDUsage_Csmr_FireAlarm = 0x107,	/* One-Shot Control */
kHIDUsage_Csmr_PoliceAlarm = 0x108,	/* One-Shot Control */
/* 0x109 - 0x14F Reserved */
kHIDUsage_Csmr_BalanceRight = 0x150,	/* Re-Trigger Control */
kHIDUsage_Csmr_BalanceLeft = 0x151,	/* Re-Trigger Control */
kHIDUsage_Csmr_BassIncrement = 0x152,	/* Re-Trigger Control */
kHIDUsage_Csmr_BassDecrement = 0x153,	/* Re-Trigger Control */
kHIDUsage_Csmr_TrebleIncrement = 0x154,	/* Re-Trigger Control */
kHIDUsage_Csmr_TrebleDecrement = 0x155,	/* Re-Trigger Control */
/* 0x156 - 0x15F Reserved */
kHIDUsage_Csmr_SpeakerSystem = 0x160,	/* Logical Collection */
kHIDUsage_Csmr_ChannelLeft = 0x161,	/* Logical Collection */
kHIDUsage_Csmr_ChannelRight = 0x162,	/* Logical Collection */
kHIDUsage_Csmr_ChannelCenter = 0x163,	/* Logical Collection */
kHIDUsage_Csmr_ChannelFront = 0x164,	/* Logical Collection */
kHIDUsage_Csmr_ChannelCenterFront = 0x165,	/* Logical Collection */
kHIDUsage_Csmr_ChannelSide = 0x166,	/* Logical Collection */
kHIDUsage_Csmr_ChannelSurround = 0x167,	/* Logical Collection */
kHIDUsage_Csmr_ChannelLowFrequencyEnhancement = 0x168,	/* Logical Collection */
kHIDUsage_Csmr_ChannelTop = 0x169,	/* Logical Collection */
kHIDUsage_Csmr_ChannelUnknown = 0x16A,	/* Logical Collection */
/* 0x16B - 0x16F Reserved */
kHIDUsage_Csmr_SubChannel = 0x170,	/* Linear Control */
kHIDUsage_Csmr_SubChannelIncrement = 0x171,	/* One-Shot Control */
kHIDUsage_Csmr_SubChannelDecrement = 0x172,	/* One-Shot Control */
kHIDUsage_Csmr_AlternateAudioIncrement = 0x173,	/* One-Shot Control */
kHIDUsage_Csmr_AlternateAudioDecrement = 0x174,	/* One-Shot Control */
/* 0x175 - 0x17F Reserved */
kHIDUsage_Csmr_ApplicationLaunchButtons = 0x180,	/* Named Array */
kHIDUsage_Csmr_ALLaunchButtonConfigurationTool = 0x181,	/* Selector */
kHIDUsage_Csmr_ALProgrammableButtonConfiguration = 0x182,	/* Selector */
kHIDUsage_Csmr_ALConsumerControlConfiguration = 0x183,	/* Selector */
kHIDUsage_Csmr_ALWordProcessor = 0x184,	/* Selector */
kHIDUsage_Csmr_ALTextEditor = 0x185,	/* Selector */
kHIDUsage_Csmr_ALSpreadsheet = 0x186,	/* Selector */
kHIDUsage_Csmr_ALGraphicsEditor = 0x187,	/* Selector */
kHIDUsage_Csmr_ALPresentationApp = 0x188,	/* Selector */
kHIDUsage_Csmr_ALDatabaseApp = 0x189,	/* Selector */
kHIDUsage_Csmr_ALEmailReader = 0x18A,	/* Selector */
kHIDUsage_Csmr_ALNewsreader = 0x18B,	/* Selector */
kHIDUsage_Csmr_ALVoicemail = 0x18C,	/* Selector */
kHIDUsage_Csmr_ALContactsOrAddressBook = 0x18D,	/* Selector */
kHIDUsage_Csmr_ALCalendarOrSchedule = 0x18E,	/* Selector */
kHIDUsage_Csmr_ALTaskOrProjectManager = 0x18F,	/* Selector */
kHIDUsage_Csmr_ALLogOrJournalOrTimecard = 0x190,	/* Selector */
kHIDUsage_Csmr_ALCheckbookOrFinance = 0x191,	/* Selector */
kHIDUsage_Csmr_ALCalculator = 0x192,	/* Selector */
kHIDUsage_Csmr_ALAOrVCaptureOrPlayback = 0x193,	/* Selector */
kHIDUsage_Csmr_ALLocalMachineBrowser = 0x194,	/* Selector */
kHIDUsage_Csmr_ALLANOrWANBrowser = 0x195,	/* Selector */
kHIDUsage_Csmr_ALInternetBrowser = 0x196,	/* Selector */
kHIDUsage_Csmr_ALRemoteNetworkingOrISPConnect = 0x197,	/* Selector */
kHIDUsage_Csmr_ALNetworkConference = 0x198,	/* Selector */
kHIDUsage_Csmr_ALNetworkChat = 0x199,	/* Selector */
kHIDUsage_Csmr_ALTelephonyOrDialer = 0x19A,	/* Selector */
kHIDUsage_Csmr_ALLogon = 0x19B,	/* Selector */
kHIDUsage_Csmr_ALLogoff = 0x19C,	/* Selector */
kHIDUsage_Csmr_ALLogonOrLogoff = 0x19D,	/* Selector */
kHIDUsage_Csmr_ALTerminalLockOrScreensaver = 0x19E,	/* Selector */
kHIDUsage_Csmr_ALControlPanel = 0x19F,	/* Selector */
kHIDUsage_Csmr_ALCommandLineProcessorOrRun = 0x1A0,	/* Selector */
kHIDUsage_Csmr_ALProcessOrTaskManager = 0x1A1,	/* Selector */
kHIDUsage_Csmr_AL = 0x1A2,	/* Selector */
kHIDUsage_Csmr_ALNextTaskOrApplication = 0x143,	/* Selector */
kHIDUsage_Csmr_ALPreviousTaskOrApplication = 0x1A4,	/* Selector */
kHIDUsage_Csmr_ALPreemptiveHaltTaskOrApplication = 0x1A5,	/* Selector */
/* 0x1A6 - 0x1FF Reserved */
kHIDUsage_Csmr_GenericGUIApplicationControls = 0x200,	/* Named Array */
kHIDUsage_Csmr_ACNew = 0x201,	/* Selector */
kHIDUsage_Csmr_ACOpen = 0x202,	/* Selector */
kHIDUsage_Csmr_ACClose = 0x203,	/* Selector */
kHIDUsage_Csmr_ACExit = 0x204,	/* Selector */
kHIDUsage_Csmr_ACMaximize = 0x205,	/* Selector */
kHIDUsage_Csmr_ACMinimize = 0x206,	/* Selector */
kHIDUsage_Csmr_ACSave = 0x207,	/* Selector */
kHIDUsage_Csmr_ACPrint = 0x208,	/* Selector */
kHIDUsage_Csmr_ACProperties = 0x209,	/* Selector */
kHIDUsage_Csmr_ACUndo = 0x21A,	/* Selector */
kHIDUsage_Csmr_ACCopy = 0x21B,	/* Selector */
kHIDUsage_Csmr_ACCut = 0x21C,	/* Selector */
kHIDUsage_Csmr_ACPaste = 0x21D,	/* Selector */
kHIDUsage_Csmr_AC = 0x21E,	/* Selector */
kHIDUsage_Csmr_ACFind = 0x21F,	/* Selector */
kHIDUsage_Csmr_ACFindandReplace = 0x220,	/* Selector */
kHIDUsage_Csmr_ACSearch = 0x221,	/* Selector */
kHIDUsage_Csmr_ACGoTo = 0x222,	/* Selector */
kHIDUsage_Csmr_ACHome = 0x223,	/* Selector */
kHIDUsage_Csmr_ACBack = 0x224,	/* Selector */
kHIDUsage_Csmr_ACForward = 0x225,	/* Selector */
kHIDUsage_Csmr_ACStop = 0x226,	/* Selector */
kHIDUsage_Csmr_ACRefresh = 0x227,	/* Selector */
kHIDUsage_Csmr_ACPreviousLink = 0x228,	/* Selector */
kHIDUsage_Csmr_ACNextLink = 0x229,	/* Selector */
kHIDUsage_Csmr_ACBookmarks = 0x22A,	/* Selector */
kHIDUsage_Csmr_ACHistory = 0x22B,	/* Selector */
kHIDUsage_Csmr_ACSubscriptions = 0x22C,	/* Selector */
kHIDUsage_Csmr_ACZoomIn = 0x22D,	/* Selector */
kHIDUsage_Csmr_ACZoomOut = 0x22E,	/* Selector */
kHIDUsage_Csmr_ACZoom = 0x22F,	/* Selector */
kHIDUsage_Csmr_ACFullScreenView = 0x230,	/* Selector */
kHIDUsage_Csmr_ACNormalView = 0x231,	/* Selector */
kHIDUsage_Csmr_ACViewToggle = 0x232,	/* Selector */
kHIDUsage_Csmr_ACScrollUp = 0x233,	/* Selector */
kHIDUsage_Csmr_ACScrollDown = 0x234,	/* Selector */
kHIDUsage_Csmr_ACScroll = 0x235,	/* Selector */
kHIDUsage_Csmr_ACPanLeft = 0x236,	/* Selector */
kHIDUsage_Csmr_ACPanRight = 0x237,	/* Selector */
kHIDUsage_Csmr_ACPan = 0x238,	/* Selector */
kHIDUsage_Csmr_ACNewWindow = 0x239,	/* Selector */
kHIDUsage_Csmr_ACTileHorizontally = 0x23A,	/* Selector */
kHIDUsage_Csmr_ACTileVertically = 0x23B,	/* Selector */
kHIDUsage_Csmr_ACFormat = 0x23C,	/* Selector */
/* 0x23D - 0xFFFF Reserved */
kHIDUsage_Csmr_Reserved = 0xFFFF,
```

### 键盘输入

eventPageID = 0x07

```
/* USB Device Class Definition for Human Interface Devices (HID). Note: the usage type for all key codes is Selector (Sel). */
* KeyboardOrKeypad Page (0x07) */
/* This section is the Usage Page for key codes to be used in implementing a USB keyboard. A Boot Keyboard (84-, 101- or 104-key) should at a minimum support all associated usage codes as indicated in the ÒBootÓ */
/* column below. */
/* The usage type of all key codes is Selectors (Sel), except for the modifier keys Keyboard Left Control (0x224) to Keyboard Right GUI (0x231) which are Dynamic Flags (DV). */
/* Note: A general note on Usages and languages: Due to the variation of keyboards from language to language, it is not feasible to specify exact key mappings for every language. Where this list is not specific for a key function in a language, the closest equivalent key position should be used, so that a keyboard may be modified for a different language by simply printing different keycaps. One example is the Y key on a North American keyboard. In Germany this is typically Z. Rather than changing the keyboard firmware to put the Z Usage into that place in the descriptor list, the vendor should use the Y Usage on both the North American and German keyboards. This continues to be the existing practice in the industry, in order to minimize the number of changes to the electronics to accommodate otherlanguages. */

```

eventUsageID = 以下是从源码中复制，具体什么情况需要自己试试

```js showLineNumbers
kHIDUsage_KeyboardErrorRollOver = 0x01,	/* ErrorRollOver */
kHIDUsage_KeyboardPOSTFail = 0x02,	/* POSTFail */
kHIDUsage_KeyboardErrorUndefined = 0x03,	/* ErrorUndefined */
kHIDUsage_KeyboardA = 0x04,	/* a or A */
kHIDUsage_KeyboardB = 0x05,	/* b or B */
kHIDUsage_KeyboardC = 0x06,	/* c or C */
kHIDUsage_KeyboardD = 0x07,	/* d or D */
kHIDUsage_KeyboardE = 0x08,	/* e or E */
kHIDUsage_KeyboardF = 0x09,	/* f or F */
kHIDUsage_KeyboardG = 0x0A,	/* g or G */
kHIDUsage_KeyboardH = 0x0B,	/* h or H */
kHIDUsage_KeyboardI = 0x0C,	/* i or I */
kHIDUsage_KeyboardJ = 0x0D,	/* j or J */
kHIDUsage_KeyboardK = 0x0E,	/* k or K */
kHIDUsage_KeyboardL = 0x0F,	/* l or L */
kHIDUsage_KeyboardM = 0x10,	/* m or M */
kHIDUsage_KeyboardN = 0x11,	/* n or N */
kHIDUsage_KeyboardO = 0x12,	/* o or O */
kHIDUsage_KeyboardP = 0x13,	/* p or P */
kHIDUsage_KeyboardQ = 0x14,	/* q or Q */
kHIDUsage_KeyboardR = 0x15,	/* r or R */
kHIDUsage_KeyboardS = 0x16,	/* s or S */
kHIDUsage_KeyboardT = 0x17,	/* t or T */
kHIDUsage_KeyboardU = 0x18,	/* u or U */
kHIDUsage_KeyboardV = 0x19,	/* v or V */
kHIDUsage_KeyboardW = 0x1A,	/* w or W */
kHIDUsage_KeyboardX = 0x1B,	/* x or X */
kHIDUsage_KeyboardY = 0x1C,	/* y or Y */
kHIDUsage_KeyboardZ = 0x1D,	/* z or Z */
kHIDUsage_Keyboard1 = 0x1E,	/* 1 or ! */
kHIDUsage_Keyboard2 = 0x1F,	/* 2 or @ */
kHIDUsage_Keyboard3 = 0x20,	/* 3 or # */
kHIDUsage_Keyboard4 = 0x21,	/* 4 or $ */
kHIDUsage_Keyboard5 = 0x22,	/* 5 or % */
kHIDUsage_Keyboard6 = 0x23,	/* 6 or ^ */
kHIDUsage_Keyboard7 = 0x24,	/* 7 or & */
kHIDUsage_Keyboard8 = 0x25,	/* 8 or * */
kHIDUsage_Keyboard9 = 0x26,	/* 9 or ( */
kHIDUsage_Keyboard0 = 0x27,	/* 0 or ) */
kHIDUsage_KeyboardReturnOrEnter = 0x28,	/* Return (Enter) */
kHIDUsage_KeyboardEscape = 0x29,	/* Escape */
kHIDUsage_KeyboardDeleteOrBackspace = 0x2A,	/* Delete (Backspace) */
kHIDUsage_KeyboardTab = 0x2B,	/* Tab */
kHIDUsage_KeyboardSpacebar = 0x2C,	/* Spacebar */
kHIDUsage_KeyboardHyphen = 0x2D,	/* - or _ */
kHIDUsage_KeyboardEqualSign = 0x2E,	/* = or + */
kHIDUsage_KeyboardOpenBracket = 0x2F,	/* [ or { */
kHIDUsage_KeyboardCloseBracket = 0x30,	/* ] or } */
kHIDUsage_KeyboardBackslash = 0x31,	/* \ or | */
kHIDUsage_KeyboardNonUSPound = 0x32,	/* Non-US # or _ */
kHIDUsage_KeyboardSemicolon = 0x33,	/* ; or : */
kHIDUsage_KeyboardQuote = 0x34,	/* ' or " */
kHIDUsage_KeyboardGraveAccentAndTilde = 0x35,	/* Grave Accent and Tilde */
kHIDUsage_KeyboardComma = 0x36,	/* , or < */
kHIDUsage_KeyboardPeriod = 0x37,	/* . or > */
kHIDUsage_KeyboardSlash = 0x38,	/* / or ? */
kHIDUsage_KeyboardCapsLock = 0x39,	/* Caps Lock */
kHIDUsage_KeyboardF1 = 0x3A,	/* F1 */
kHIDUsage_KeyboardF2 = 0x3B,	/* F2 */
kHIDUsage_KeyboardF3 = 0x3C,	/* F3 */
kHIDUsage_KeyboardF4 = 0x3D,	/* F4 */
kHIDUsage_KeyboardF5 = 0x3E,	/* F5 */
kHIDUsage_KeyboardF6 = 0x3F,	/* F6 */
kHIDUsage_KeyboardF7 = 0x40,	/* F7 */
kHIDUsage_KeyboardF8 = 0x41,	/* F8 */
kHIDUsage_KeyboardF9 = 0x42,	/* F9 */
kHIDUsage_KeyboardF10 = 0x43,	/* F10 */
kHIDUsage_KeyboardF11 = 0x44,	/* F11 */
kHIDUsage_KeyboardF12 = 0x45,	/* F12 */
kHIDUsage_KeyboardPrintScreen = 0x46,	/* Print Screen */
kHIDUsage_KeyboardScrollLock = 0x47,	/* Scroll Lock */
kHIDUsage_KeyboardPause = 0x48,	/* Pause */
kHIDUsage_KeyboardInsert = 0x49,	/* Insert */
kHIDUsage_KeyboardHome = 0x4A,	/* Home */
kHIDUsage_KeyboardPageUp = 0x4B,	/* Page Up */
kHIDUsage_KeyboardDeleteForward = 0x4C,	/* Delete Forward */
kHIDUsage_KeyboardEnd = 0x4D,	/* End */
kHIDUsage_KeyboardPageDown = 0x4E,	/* Page Down */
kHIDUsage_KeyboardRightArrow = 0x4F,	/* Right Arrow */
kHIDUsage_KeyboardLeftArrow = 0x50,	/* Left Arrow */
kHIDUsage_KeyboardDownArrow = 0x51,	/* Down Arrow */
kHIDUsage_KeyboardUpArrow = 0x52,	/* Up Arrow */
kHIDUsage_KeypadNumLock = 0x53,	/* Keypad NumLock or Clear */
kHIDUsage_KeypadSlash = 0x54,	/* Keypad / */
kHIDUsage_KeypadAsterisk = 0x55,	/* Keypad * */
kHIDUsage_KeypadHyphen = 0x56,	/* Keypad - */
kHIDUsage_KeypadPlus = 0x57,	/* Keypad + */
kHIDUsage_KeypadEnter = 0x58,	/* Keypad Enter */
kHIDUsage_Keypad1 = 0x59,	/* Keypad 1 or End */
kHIDUsage_Keypad2 = 0x5A,	/* Keypad 2 or Down Arrow */
kHIDUsage_Keypad3 = 0x5B,	/* Keypad 3 or Page Down */
kHIDUsage_Keypad4 = 0x5C,	/* Keypad 4 or Left Arrow */
kHIDUsage_Keypad5 = 0x5D,	/* Keypad 5 */
kHIDUsage_Keypad6 = 0x5E,	/* Keypad 6 or Right Arrow */
kHIDUsage_Keypad7 = 0x5F,	/* Keypad 7 or Home */
kHIDUsage_Keypad8 = 0x60,	/* Keypad 8 or Up Arrow */
kHIDUsage_Keypad9 = 0x61,	/* Keypad 9 or Page Up */
kHIDUsage_Keypad0 = 0x62,	/* Keypad 0 or Insert */
kHIDUsage_KeypadPeriod = 0x63,	/* Keypad . or Delete */
kHIDUsage_KeyboardNonUSBackslash = 0x64,	/* Non-US \ or | */
kHIDUsage_KeyboardApplication = 0x65,	/* Application */
kHIDUsage_KeyboardPower = 0x66,	/* Power */
kHIDUsage_KeypadEqualSign = 0x67,	/* Keypad = */
kHIDUsage_KeyboardF13 = 0x68,	/* F13 */
kHIDUsage_KeyboardF14 = 0x69,	/* F14 */
kHIDUsage_KeyboardF15 = 0x6A,	/* F15 */
kHIDUsage_KeyboardF16 = 0x6B,	/* F16 */
kHIDUsage_KeyboardF17 = 0x6C,	/* F17 */
kHIDUsage_KeyboardF18 = 0x6D,	/* F18 */
kHIDUsage_KeyboardF19 = 0x6E,	/* F19 */
kHIDUsage_KeyboardF20 = 0x6F,	/* F20 */
kHIDUsage_KeyboardF21 = 0x70,	/* F21 */
kHIDUsage_KeyboardF22 = 0x71,	/* F22 */
kHIDUsage_KeyboardF23 = 0x72,	/* F23 */
kHIDUsage_KeyboardF24 = 0x73,	/* F24 */
kHIDUsage_KeyboardExecute = 0x74,	/* Execute */
kHIDUsage_KeyboardHelp = 0x75,	/* Help */
kHIDUsage_KeyboardMenu = 0x76,	/* Menu */
kHIDUsage_KeyboardSelect = 0x77,	/* Select */
kHIDUsage_KeyboardStop = 0x78,	/* Stop */
kHIDUsage_KeyboardAgain = 0x79,	/* Again */
kHIDUsage_KeyboardUndo = 0x7A,	/* Undo */
kHIDUsage_KeyboardCut = 0x7B,	/* Cut */
kHIDUsage_KeyboardCopy = 0x7C,	/* Copy */
kHIDUsage_KeyboardPaste = 0x7D,	/* Paste */
kHIDUsage_KeyboardFind = 0x7E,	/* Find */
kHIDUsage_KeyboardMute = 0x7F,	/* Mute */
kHIDUsage_KeyboardVolumeUp = 0x80,	/* Volume Up */
kHIDUsage_KeyboardVolumeDown = 0x81,	/* Volume Down */
kHIDUsage_KeyboardLockingCapsLock = 0x82,	/* Locking Caps Lock */
kHIDUsage_KeyboardLockingNumLock = 0x83,	/* Locking Num Lock */
kHIDUsage_KeyboardLockingScrollLock = 0x84,	/* Locking Scroll Lock */
kHIDUsage_KeypadComma = 0x85,	/* Keypad Comma */
kHIDUsage_KeypadEqualSignAS400 = 0x86,	/* Keypad Equal Sign for AS/400 */
kHIDUsage_KeyboardInternational1 = 0x87,	/* International1 */
kHIDUsage_KeyboardInternational2 = 0x88,	/* International2 */
kHIDUsage_KeyboardInternational3 = 0x89,	/* International3 */
kHIDUsage_KeyboardInternational4 = 0x8A,	/* International4 */
kHIDUsage_KeyboardInternational5 = 0x8B,	/* International5 */
kHIDUsage_KeyboardInternational6 = 0x8C,	/* International6 */
kHIDUsage_KeyboardInternational7 = 0x8D,	/* International7 */
kHIDUsage_KeyboardInternational8 = 0x8E,	/* International8 */
kHIDUsage_KeyboardInternational9 = 0x8F,	/* International9 */
kHIDUsage_KeyboardLANG1 = 0x90,	/* LANG1 */
kHIDUsage_KeyboardLANG2 = 0x91,	/* LANG2 */
kHIDUsage_KeyboardLANG3 = 0x92,	/* LANG3 */
kHIDUsage_KeyboardLANG4 = 0x93,	/* LANG4 */
kHIDUsage_KeyboardLANG5 = 0x94,	/* LANG5 */
kHIDUsage_KeyboardLANG6 = 0x95,	/* LANG6 */
kHIDUsage_KeyboardLANG7 = 0x96,	/* LANG7 */
kHIDUsage_KeyboardLANG8 = 0x97,	/* LANG8 */
kHIDUsage_KeyboardLANG9 = 0x98,	/* LANG9 */
kHIDUsage_KeyboardAlternateErase = 0x99,	/* AlternateErase */
kHIDUsage_KeyboardSysReqOrAttention = 0x9A,	/* SysReq/Attention */
kHIDUsage_KeyboardCancel = 0x9B,	/* Cancel */
kHIDUsage_KeyboardClear = 0x9C,	/* Clear */
kHIDUsage_KeyboardPrior = 0x9D,	/* Prior */
kHIDUsage_KeyboardReturn = 0x9E,	/* Return */
kHIDUsage_KeyboardSeparator = 0x9F,	/* Separator */
kHIDUsage_KeyboardOut = 0xA0,	/* Out */
kHIDUsage_KeyboardOper = 0xA1,	/* Oper */
kHIDUsage_KeyboardClearOrAgain = 0xA2,	/* Clear/Again */
kHIDUsage_KeyboardCrSelOrProps = 0xA3,	/* CrSel/Props */
kHIDUsage_KeyboardExSel = 0xA4,	/* ExSel */
/* 0xA5-0xDF Reserved */
kHIDUsage_KeyboardLeftControl = 0xE0,	/* Left Control */
kHIDUsage_KeyboardLeftShift = 0xE1,	/* Left Shift */
kHIDUsage_KeyboardLeftAlt = 0xE2,	/* Left Alt */
kHIDUsage_KeyboardLeftGUI = 0xE3,	/* Left GUI */
kHIDUsage_KeyboardRightControl = 0xE4,	/* Right Control */
kHIDUsage_KeyboardRightShift = 0xE5,	/* Right Shift */
kHIDUsage_KeyboardRightAlt = 0xE6,	/* Right Alt */
kHIDUsage_KeyboardRightGUI = 0xE7,	/* Right GUI */
/* 0xE8-0xFFFF Reserved */
kHIDUsage_Keyboard_Reserved = 0xFFFF,
```

