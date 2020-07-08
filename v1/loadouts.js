// loadout resource

router.post("/", async (req, res) => {
   // Creating a new loadout
});

// Recommended
router.delete("/:id", async (req, res) => {
   // api/v1/loadout/67961bbf-adc3-42fd-a890-bd806e0be248

   // Deleting a new loadout
   const loadout = req.params.id;
});

// Acceptable
router.delete("/", async (req, res) => {
   // api/v1/loadout/?id=67961bbf-adc3-42fd-a890-bd806e0be248

   // Deleting a new loadout
   const loadout = req.query.id;
});

// Acceptable
router.delete("/", async (req, res) => {
   // api/v1/loadout/

   // Deleting a new loadout
   const loadout = req.body;
});

router.put("/:id", async (req, res) => {
   // api/v1/loadout/67961bbf-adc3-42fd-a890-bd806e0be248

   // Updating a loadout
   const loadout = req.params.id;
});

router.get("/:userId", async (req, res) => {
   // api/v1/loadout/cd9883ff-fd1a-463d-8c46-cf78a785f4c3

   // Get all loadouts for a user
   const userId = req.params.userId;
});
